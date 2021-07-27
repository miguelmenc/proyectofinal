import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import fireapp from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  users: Observable<any[]>;
  private authState: any;
  userStatus: any;


  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private afs: AngularFirestore,
    private router: Router,// Inject Firebase service
    private ngZone: NgZone,
    private fireAuth: AngularFireAuth,


  ) {

    this.user = afAuth.authState;
    this.afAuth.authState.subscribe(user => {
      if (user) {
  
        this.userStatus = user;
        localStorage.setItem('user', JSON.stringify(this.userStatus));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }

  authUser() {
   
    return this.user
  }
  // datos de usuario
  setUserData(user: any) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      

    }
    return this.afs.collection('users').doc(user.uid).set(userData, {
      merge: true

    }).then(succes => {
      this.getCurrentUsers()
    })
  }
  userData(): User {
    return JSON.parse(localStorage.getItem('user')!)
  }

  updateLocalData(user: any) {
    const data = this.userData()
    data.username = user.username

    localStorage.setItem('user', JSON.stringify(data));
  }

  

  googleAuth(): Promise<any> { // login de google
    return this.afAuth.signInWithPopup(new fireapp.auth.GoogleAuthProvider())
      .then((result) => {
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result.user));
        this.setUserData(result.user);
        // this.router.navigate(['content/:id']);
      }).catch((error) => {
        throwError(error)
      })
  }


  getCurrentUsers() { //mostrar usuarios en FireCloud
    const uid = this.userData().uid
    this.afs.collection('users').doc(uid).get().subscribe(data => {
      this.updateLocalData(data.data())
    })
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    if(user) {
      return true
    }
    return false
  }

  signOut() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    })
  }

 

  



  




  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  


  


  //esto es un ejemplo message
  singInEmailPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['chat']);
        });
        this.setUserDataExample(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  singUpEmailPassword(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password, )
      .then((result) => {
       

        this.setUserDataExample(result.user);
        this.router.navigate(['login'])
        
      }).catch((error) => {
        window.alert(error.message)
      })

  }
  

  setUserDataExample(user: User) { 
   
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })

    
  }
  SignOutExample() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }




}
