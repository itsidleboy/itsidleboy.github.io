
// Change this to your repository name
var GHPATH = 'https://idleboy4038.github.io';

// Choose a different app prefix name
var APP_PREFIX = 'pwa';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/pwa/`,
  `${GHPATH}/assets/`,
  `${GHPATH}/tabs/`
  `${GHPATH}/ja/`
]

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgcW1-9niOrkQyUFBzFD9aHUKLEG7cEpc",
    authDomain: "idle-boy.firebaseapp.com",
    projectId: "idle-boy",
    storageBucket: "idle-boy.appspot.com",
    messagingSenderId: "395887802821",
    appId: "1:395887802821:web:31f5bc0b830af8d9abb3ac",
    measurementId: "G-QRFNBZHPBT"
  };