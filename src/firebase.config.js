import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAYcZmfRogiHC9A16h8uUiftDOiIgjh7O0",
  authDomain: "ouimade-f9afd.firebaseapp.com",
  projectId: "ouimade-f9afd",
  storageBucket: "ouimade-f9afd.appspot.com",
  messagingSenderId: "1074838262814",
  appId: "1:1074838262814:web:2ff55936ad21a24bd1ca0f"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app