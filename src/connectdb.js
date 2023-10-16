// inport tools we need from our libraries
import { initializeApp, cert } from "firebase-admin/app"; 
import{ getFirestore } from "firebase-admin/firestore";

// import our secret credentials 
import { creds } from "./cred.js";
// connect to our firebase project with our credentials

initializeApp({
    credential:  cert(creds),
});

// Once connected, connnect to our firestore database

export const db = getFirestore();

