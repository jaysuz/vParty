import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClvn2v_Q-fIhswD2OxdKPo9ox1ucWFWds',
  authDomain: 'vparty-2e352.firebaseapp.com',
  databaseURL: 'https://vparty-2e352.firebaseio.com',
  projectId: 'vparty-2e352',
  storageBucket: 'vparty-2e352.appspot.com',
  messagingSenderId: '633693236641',
  appId: '1:633693236641:web:04ff34eda4a7e133a3efe0'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
