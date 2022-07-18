// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdIZQSen4LoE2CIBBPnFx3zoAhXiHSBn4",
  authDomain: "fomo-fd1e4.firebaseapp.com",
  projectId: "fomo-fd1e4",
  storageBucket: "fomo-fd1e4.appspot.com",
  messagingSenderId: "95729743495",
  appId: "1:95729743495:web:c27e857bb14b5a91c86a22",
  measurementId: "G-KSN7MM8KBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);