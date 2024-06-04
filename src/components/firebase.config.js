
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCkIJvl3bl6GeyxyTg7Z1hsotyJr9iCka8",
  authDomain: "college-b9c6e.firebaseapp.com",
  projectId: "college-b9c6e",
  storageBucket: "college-b9c6e.appspot.com",
  messagingSenderId: "260412053001",
  appId: "1:260412053001:web:f9b653581b309207fb0ad8",
  measurementId: "G-D44M2LRBXD"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);