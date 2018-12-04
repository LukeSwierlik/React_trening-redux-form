import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBIOxMsNd9RiToQDe-c6SmKO7LEMKwjm80",
    authDomain: "rickmorty-6ec13.firebaseapp.com",
    databaseURL: "https://rickmorty-6ec13.firebaseio.com",
    projectId: "rickmorty-6ec13",
    storageBucket: "rickmorty-6ec13.appspot.com",
    messagingSenderId: "559802783923"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp
    .firestore()
    .settings({
        timestampsInSnapshots: true
    });

export default firebaseApp.firestore();
