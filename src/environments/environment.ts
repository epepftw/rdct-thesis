// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_api: 'http://localhost:3000/api',
  get: {
    users: '/users',
    users_profile: '/users/profile',
    keys: '/keys'
  },
  authenticate: 'http://localhost:3000/api/users/authenticate',
  api: 'https://jsonplaceholder.typicode.com',
  mediaFiles: '/photos?_start=0&_limit=40'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
