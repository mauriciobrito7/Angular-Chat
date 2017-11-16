// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyAalW3wk25iBv6VrYJKaOEf5DfZBvNmtQI',
    authDomain: 'angular-chat-adc2f.firebaseapp.com',
    databaseURL: 'https://angular-chat-adc2f.firebaseio.com',
    projectId: 'angular-chat-adc2f',
    storageBucket: 'angular-chat-adc2f.appspot.com',
    messagingSenderId: '245934445922'
  }
};
