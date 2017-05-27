import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZTIhnWrdBI6Hg5XiFrSct0QkJOr8Yp7g",
  authDomain: "todolist-base.firebaseapp.com",
  databaseURL: "https://todolist-base.firebaseio.com",
  projectId: "todolist-base",
  storageBucket: "todolist-base.appspot.com",
  messagingSenderId: "972391637296"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;