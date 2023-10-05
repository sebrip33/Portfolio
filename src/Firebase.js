import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1SI3CmjPyo-c0ljBmh0cVlxr_wc7aFM0",
  authDomain: "mon-portfolio-b5efe.firebaseapp.com",
  databaseURL: "https://mon-portfolio-b5efe-default-rtdb.firebaseio.com",
  projectId: "mon-portfolio-b5efe",
  storageBucket: "mon-portfolio-b5efe.appspot.com",
  messagingSenderId: "928572990297",
  appId: "1:928572990297:web:13852f52705a884989e248",
  measurementId: "G-C16MLPHY68"
};

initializeApp(firebaseConfig);

const auth = getAuth()
signInAnonymously(auth)
  .then((userCredential) => {
    // Vous pouvez accéder aux informations de l'utilisateur connecté avec userCredential.user
  })
  .catch((error) => {
    // Gérer les erreurs ici.
    console.error(error);
  });
  
export const db = getFirestore()

export const collectionRef = collection(db, 'works')

// Récupérer les données de la collection sur Firestore
const getWorksData = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'works'));
      const works = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return works;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error.message);
      return [];
    }
  };

  export { getWorksData };
    