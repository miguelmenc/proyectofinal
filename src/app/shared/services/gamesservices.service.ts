import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesservicesService {
  


  constructor(private fireStore: AngularFirestore) { 
   
  }

  readGames(){
    return this.fireStore.collection('games').get()
  }

  getGame(id: string){
    return this.fireStore.collection('games').doc(id).get()
  }


}
