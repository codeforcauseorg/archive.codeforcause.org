import axios from 'src/utils/axios';

export const GET_NOTIFICATIONS = '@notifications/get-notifications';

export function getNotifications() {
  const request = axios.get('/api/notifications');

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_NOTIFICATIONS,
      payload: response.data
    }));
  };
}
