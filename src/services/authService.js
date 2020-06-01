import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';
import Keycloak from 'keycloak-js';

class AuthService {
  keycloak = Keycloak({
    url: 'http://localhost:3000/auth',
    realm: 'master',
    clientId: 'sample-client'
  });

  user = {}

  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout(

            );
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    return new Promise((resolve) => {
      this.keycloak.init().then((authenticated) => {
        resolve(authenticated);
      })
    });
  }

  loadUserProfile() {
    return new Promise((resolve)=>{
      this.keycloak
      .loadUserProfile()
      .then(profile => {
        console.log(JSON.stringify(profile))
        resolve(profile);
      })
      .catch(function() {
        alert('Failed to load user profile');
      });
    })
    
  }

  login = () => {
    this.keycloak
      .init()
      .then(authenticated => {
        if (!authenticated) {
          this.keycloak.login();
        }
      })
      .catch(function(e) {
        console.log(e);
      });
  }
  
  loginInWithToken = () =>
    new Promise((resolve, reject) => {
      axios
        .get('/api/account/me')
        .then(response => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch(error => {
          reject(error);
        });
    });

  logout = () => {
    this.keycloak.logout({redirectUri : 'http://localhost:3000/home'});
    this.setSession(null);
  };

  setSession = accessToken => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem('accessToken');

  isValidToken = accessToken => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  isAuthenticated = () => !!this.keycloak.authenticated;
}

const authService = new AuthService();

export default authService;
