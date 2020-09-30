import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/storage";
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDyyTxcbrU-GMDXbVh0A-lZ-XPYS97F73Q",
    authDomain: "tipjarr.firebaseapp.com",
    databaseURL: "https://tipjarr.firebaseio.com",
    projectId: "tipjarr",
    storageBucket: "tipjarr.appspot.com",
    messagingSenderId: "301721315375",
    appId: "1:301721315375:web:56aef84f870bb43e457eda",
    measurementId: "G-VGL0EJK8FL",
  });

  // analytics();
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };
