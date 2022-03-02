import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBojH-gZScIvh-3rZtFatGeKAPW4IIjSd8",
  authDomain: "coronavirustracker-75e09.firebaseapp.com",
  projectId: "coronavirustracker-75e09",
  storageBucket: "coronavirustracker-75e09.appspot.com",
  messagingSenderId: "607565239118",
  appId: "1:607565239118:web:a20649e80454cd7d30841f",
  measurementId: "G-BL161C033J",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
