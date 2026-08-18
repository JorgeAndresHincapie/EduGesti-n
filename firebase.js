import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMNCAuSfYlwcCIYQsIvWX3k6YPbVZa-64",
  authDomain: "gestion-educativa-f152b.firebaseapp.com",
  projectId: "gestion-educativa-f152b",
  storageBucket: "gestion-educativa-f152b.firebasestorage.app",
  messagingSenderId: "202539210272",
  appId: "1:202539210272:web:090d48b60e6cc757118e45"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export {
  auth, db, firebaseConfig, initializeApp, getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc,
  collection, addDoc, query, where, orderBy, serverTimestamp
};
