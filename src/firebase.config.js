
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNSqcVt3LpToPSPCCNYIuXBu0sRn7rUA",
  authDomain: "house-marketplace-app-dfe00.firebaseapp.com",
  projectId: "house-marketplace-app-dfe00",
  storageBucket: "house-marketplace-app-dfe00.appspot.com",
  messagingSenderId: "335562943643",
  appId: "1:335562943643:web:bf2069f3a0d3a27e692a3e"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()