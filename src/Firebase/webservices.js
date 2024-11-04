// Firebase/webservices.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const webservices = {
    apiKey: "AIzaSyBjlabAb6ceUzF_cKJ0WniFB2dCWRxAvHY",
    authDomain: "streamspace-ee45b.firebaseapp.com",
    projectId: "streamspace-ee45b",
    storageBucket: "streamspace-ee45b.appspot.com", // Corrected
    messagingSenderId: "428412007629",
    appId: "1:428412007629:web:6ba19a5ee68bc74bd56584",
    measurementId: "G-JL3B2QT5BC",
    databaseURL: 'https://streamspace-ee45b-default-rtdb.firebaseio.com/'
};

const app = initializeApp(webservices);
const db = getDatabase(app); // Initialize the database

export { app, db }; // Export both app and db


