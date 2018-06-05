// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBLFF32nC6NPJ67Qe01eK5Xp5OjCl52WPQ',
    authDomain: 'gday-xela.firebaseapp.com',
    databaseURL: 'https://gday-xela.firebaseio.com',
    projectId: 'gday-xela',
    storageBucket: 'gday-xela.appspot.com',
    messagingSenderId: '201860626926'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
