import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFdsCyKbjmB2lRUXF8-FFB-rIh-iORH2o",
  authDomain: "pixel-pool-ee297.firebaseapp.com",
  projectId: "pixel-pool-ee297",
  storageBucket: "pixel-pool-ee297.appspot.com",
  messagingSenderId: "388421101394",
  appId: "1:388421101394:web:ade6fc828b641c48b47c8b",
  measurementId: "G-41S0RZZTM3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();