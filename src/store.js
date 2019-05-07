import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore';

// Reducers

//@todo

const firebaseConfig = {
    apiKey: "AIzaSyACiOa4JYb6oq9UNvfQhAoC_-3mP5JdmQQ",
    authDomain: "reactclientpanelproject.firebaseapp.com",
    databaseURL: "https://reactclientpanelproject.firebaseio.com",
    projectId: "reactclientpanelproject",
    storageBucket: "reactclientpanelproject.appspot.com",
    messagingSenderId: "752016148981",
    appId: "1:752016148981:web:0dc7e31298d19d6b"
}



