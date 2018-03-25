// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCImtkpXehKeJQX7Pb_2gmFaqJmKSE1bcw",
    authDomain: "summarize-it.firebaseapp.com",
    databaseURL: "https://summarize-it.firebaseio.com",
    projectId: "summarize-it",
    storageBucket: "photo12321",
    messagingSenderId: "1038487249015"
  }
};
