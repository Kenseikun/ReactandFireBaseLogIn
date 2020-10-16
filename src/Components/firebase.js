import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDa5v7yDPpxMgoMgIl6XI5fidKe5EiSZ28",
  authDomain: "simpreactlogin.firebaseapp.com",
  databaseURL: "https://simpreactlogin.firebaseio.com",
  projectId: "simpreactlogin",
  storageBucket: "simpreactlogin.appspot.com",
  messagingSenderId: "956980913028",
  appId: "1:956980913028:web:f64cd8a2fbda95a6b173d1",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
