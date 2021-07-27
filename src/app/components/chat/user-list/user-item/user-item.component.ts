import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: any
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { 
    this.user = db.object(`users`).valueChanges();
    // this.user = this.afs.collection(`users`).doc().valueChanges()
  }

  ngOnInit(): void {
  }
}
