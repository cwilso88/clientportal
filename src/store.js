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
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  // Init firebase instance
  firebase.initializeApp(firebaseConfig);
  // Init firestore
  const firestore = firebase.firestore();

  // Add reactReduxFirebase enhancer when making store creator
  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
 )(createStore);

    // Add firebase to reducers
    const rootReducer = combineReducers({
        firebase: firebaseReducer,
        firestore: firestoreReducer // <- needed if using firestore
    });

    // Create initial state
    const initialState = {};

    // Create store
    const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
  

