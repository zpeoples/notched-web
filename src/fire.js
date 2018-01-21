import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCBYZHBy9H-yalHgrZmPnBT2gvfr2Z9IT4",
    authDomain: "notched-178500.firebaseapp.com",
    databaseURL: "https://notched-178500.firebaseio.com",
    projectId: "notched-178500",
    storageBucket: "notched-178500.appspot.com",
    messagingSenderId: "112722117689"
  };
var fire = firebase.initializeApp(config);
export default fire;
