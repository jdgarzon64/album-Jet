// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBh-zXsWStUjkuxBtTkSQjxGHI1wgw2Ke4',
    authDomain: 'login-app-angular.firebaseapp.com',
    databaseURL: 'https://login-app-angular.firebaseio.com',
    projectId: 'login-app-angular',
    storageBucket: 'login-app-angular.appspot.com',
    messagingSenderId: '523686290642'
  }
};
