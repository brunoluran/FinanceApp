import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyAtJecEnnuA1TesXEysBobcwUZgDZqZPqU',
  authDomain: 'financeapp-16683.firebaseapp.com',
  projectId: 'financeapp-16683',
  storageBucket: 'financeapp-16683.appspot.com',
  messagingSenderId: '692577657550',
  appId: '1:692577657550:web:4878f7ed5209cdac72269f',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
