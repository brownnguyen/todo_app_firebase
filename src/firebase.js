import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAup5lhZvr82psKEgLcYuCXXFI91ywwOJs",
    authDomain: "todo-app-cp-13634.firebaseapp.com",
    databaseURL: "https://todo-app-cp-13634.firebaseio.com",
    projectId: "todo-app-cp-13634",
    storageBucket: "todo-app-cp-13634.appspot.com",
    messagingSenderId: "804325963943",
    appId: "1:804325963943:web:f8c8bda74ee2b58f524382",
    measurementId: "G-W3F3PF824P"
});
const db = firebaseApp.firestore();
export default db;  