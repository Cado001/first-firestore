import { db } from "./connectdb.js";


export async function addArt(newArt){
  await db.collection('art').add(newArt);
}

export async function getAllArt() {
    // first, get collection from db 
    const coll = await db.collection('art').get();
    // second, convert to an array of object
    const art = coll.docs.map(doc => ({id: doc.id, ...doc.data() }));
    // third, console.log array of objects
    console.table(art);
}
