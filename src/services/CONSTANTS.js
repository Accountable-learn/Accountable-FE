/**
 * All API urls and other constants will reside here.
 * It is always a good idea to keep a local copy of all API response to
 * keep your app working for UI changes and
 * make it independent of network requirements.
 *
 * They need to be categorised and grouped together as:
 *  - Actual endpoints url.
 *  - Local data .json file path.
 * At a moment only one group should be uncommented.
 *
 * Other way to deal with this is to name every json file as per your service endpoint and use a basepath variable.
 * Toggle this basePath variable between "actual-domain.com/" or "/data/".
 */

// Actual endpoints. Uncomment below section to use actual data.
// export const GET_ALL_USERS = () => `https://jsonplaceholder.typicode.com/users`;
// export const GET_USER_DETAILS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Local endpoints. Uncomment below section to use dummy local data.
export const GET_ALL_USERS = () => '/data/users'
export const GET_USER_DETAILS = id => '/data/user'

// This will not include orgId (for userService)
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export const ML_SERVICE_URL = import.meta.env.VITE_ML_SERVICE_URL

// This will include orgId
export const API_URL = `${BACKEND_URL}/org/{{orgId}}`

export const findWebSocketUrl = () => {
  // TODO: Fix this function
  return import.meta.env.VITE_ML_WS_URL
  // if (process.env.NODE_ENV === 'development') {
  //   return `wss://localhost:4000/service/`
  // }
  // const location = document.location
  // const protocol = location.protocol === 'http:' ? 'ws:' : 'wss:'
  // const host = location.host
  // return `${protocol}//${host}/service/`
}
