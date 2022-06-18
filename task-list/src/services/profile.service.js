import {
  collection, setDoc, 
  doc,  
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Task } from '../models/task';
import { Profile } from '../models/profile';

class ProfileService {

  constructor() {
    this.collection = 'tasks';
  }

  async saveProfile(user, profile) {
    const docRef = doc(db, this.collection, profile.id);

    await setDoc(docRef, profile.toJson()); 

      await addDoc(collectionRef, {
      name: task.name,
      complete: task.complete,
    });

    task.id = docRef.id;
    return task;
  }

  async fetchProfile(user) {
    const docRef = collection(db, user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      return Profile.from Firebase(docSnap);
    }{
      return new Profile(user.uid);
    }
  }

  async updateTask(task) {
    const docRef = doc(db, this.collection, task.id);

    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete
    });

    return task;
  }
} 

const service = new TaskService();

export default service;



