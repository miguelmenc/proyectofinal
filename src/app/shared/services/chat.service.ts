import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ChatMessage } from '../models/chat-message';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {
  user: User;
  
  chatMessages: AngularFireList<ChatMessage>
  chatMessage: ChatMessage;
  userName: Observable<string>;
  mensajes: any [];

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private authService: AuthService,
    ) {
      
      this.afAuth.authState.subscribe(auth => {
        if  (auth !== undefined && auth !== null) {
          this.user = auth;
        } 

        this.getUser().subscribe((a?:any) => {
          this.userName = a?.displayName
        });
      });
    }

  getUser() {
    const uid = this.authService.userData().uid 
    const path = 'users'
    return this.afs.collection(path).doc().valueChanges();
  }

  getUsers() {
    const path = 'users'
    return this.afs.collection(path).valueChanges()
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    const userName = JSON.parse(localStorage.getItem('user')).displayName;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg, 
      timeSent: timestamp,
      userName: userName, 
      email: email });
  }

  getMessages(): AngularFireList<ChatMessage> {
     
    
   return this.db.list('messages');
  
  }

  getMessagesPrint(): Observable<any> {
    
    
   this.chatMessages = this.db.list('messages')
   return this.chatMessages.valueChanges().pipe(
     map((data: any) => {
       this.mensajes =[];
       for (let mensaje of data ){
         this.mensajes.unshift(mensaje); 

       }
       return this.mensajes;
     })
   )
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
