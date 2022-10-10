import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { db } from './../firebase';
import { useAudioFile } from './../context/AudioFileContext';

export const writeToDb = async (filename, url) => {
    try {
        const docRef = await addDoc(collection(db, "music"), {
          song: filename,
          url: url
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const readFromDb = async () => {
    const querySnapshot = await getDocs(collection(db, "music"));
    let songs = []
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().song}`);
        songs.push({ id: doc.id, song: doc.data().song, url: doc.data().url })
    });
    return songs
}

