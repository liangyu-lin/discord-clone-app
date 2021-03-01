import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7N16_PG2FOw3YPOyPM9mMtMxZGhGpJ-g",
    authDomain: "discord-clone-59261.firebaseapp.com",
    projectId: "discord-clone-59261",
    storageBucket: "discord-clone-59261.appspot.com",
    messagingSenderId: "94198373419",
    appId: "1:94198373419:web:7f5129b2a5cbd9b9cd5e6e",
    measurementId: "G-Z30WW9YS7D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};
export default db;