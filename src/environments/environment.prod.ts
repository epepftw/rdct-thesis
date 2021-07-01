export const environment = {
  production: false,
  base_api: 'http://192.168.100.11:3000/api',
  get: {
    users: '/users',
    users_profile: '/users/profile',
    keys: '/keys'
  },
  authenticate: 'http://localhost:3000/api/users/authenticate',
  api: 'https://jsonplaceholder.typicode.com',
  mediaFiles: '/photos?_start=0&_limit=40',
};
