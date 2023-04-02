import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQb5Qg38BIwWnfpIDxX8ANzFQEHUI0AYI",
  authDomain: "whatsapp-889e9.firebaseapp.com",
  projectId: "whatsapp-889e9",
  storageBucket: "whatsapp-889e9.appspot.com",
  messagingSenderId: "552323463065",
  appId: "1:552323463065:web:778ae8c4a764b260130508"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, app };