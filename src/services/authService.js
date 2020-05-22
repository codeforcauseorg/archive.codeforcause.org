import jwtDecode from 'jwt-decode';
import axios from 'src/utils/axios';
import Keycloak from 'keycloak-js';

class AuthService {
  keycloak = Keycloak({
    url: 'http://localhost:3000/auth',
    realm: 'master',
    clientId: 'sample-client'
  });

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
    this.keycloak
      .init()
      .success(authenticated => {
        if (!authenticated) {
          this.keycloak.login();
        } else {
          console.log('authenticated');
          console.log(this.keycloak.hasRealmRole("chacha"));
          this.loadUserProfile();
        }
      })
      .error(function(e) {
        console.log(e);
      });
      
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
    
  }

  loadUserProfile() {
    this.keycloak
      .loadUserProfile()
      .then(profile => {
        console.log(JSON.stringify(profile, null, '  '));
      })
      .catch(function() {
        alert('Failed to load user profile');
      });
  }

  loginWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post('/api/account/login', { email, password })
        .then(response => {
          if (response.data.user) {
            this.setSession(response.data.accessToken);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch(error => {
          reject(error);
        });
    });

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

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
