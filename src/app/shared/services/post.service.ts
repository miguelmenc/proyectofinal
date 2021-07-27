import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private authService: AuthService, private fireStore: AngularFirestore) { }

  createPost(data: any, uid: string) {
  
   
    data.uid = uid
    
   return this.fireStore.collection('Post').add(data)
   }
 
   readPost() {
    // const uid = this.authService.userData().uid
    return this.fireStore.collection('Post').get()

  }
 


  // deletePost(idToDelete: string) {
  //   const uid = this.authService.userData().uid
  //   return this.fireStore.collection('users').doc(uid).collection('Post').doc(idToDelete).delete()
  // }

  // editPost(id: string) {
  //   const uid = this.authService.userData().uid
  //   return this.fireStore.collection('users').doc(uid).collection('Post').doc(id).get()
  // }

  // updatePost(id: string, data: any) {
  //   const uid = this.authService.userData().uid
  //   return this.fireStore.collection('users').doc(uid).collection('Post').doc(id).update(data)
  // }
  getPost(id: string) {
    
    return this.fireStore.collection('Post').doc(id).get()
  }

}
