import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAM6DIcqvepjCsyUfLUV2_MUEMnExyGx-0",
  authDomain: "netflix-clone-1b988.firebaseapp.com",
  projectId: "netflix-clone-1b988",
  storageBucket: "netflix-clone-1b988.appspot.com",
  messagingSenderId: "451877183591",
  appId: "1:451877183591:web:38c375080b720a7a3974c2",
  measurementId: "G-Q3E2F7K7J7",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
