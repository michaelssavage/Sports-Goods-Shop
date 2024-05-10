import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionName = collection(db, "ads");

export const fetchAds = async (productId) => {
  const q = query(collectionName, where("productId", "==", productId));
  const docs = await getDocs(q).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  });
  return docs;
};

export const createNewAd = async (product) => {
  console.log("Creating: ", product);
  await addDoc(collectionName, product);
};

export const updateAd = async (product) => {
  console.log("Updating: ", product);
  await setDoc(doc(db, "ads", product.id), product);
};

export const deleteAd = async (docId) => {
  console.log("Deleting: ", docId);
  await deleteDoc(doc(db, "ads", docId));
};
