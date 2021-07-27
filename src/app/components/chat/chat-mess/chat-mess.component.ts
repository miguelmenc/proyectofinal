import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-chat-mess',
  templateUrl: './chat-mess.component.html',
  styleUrls: ['./chat-mess.component.scss']
})
export class ChatMessComponent implements OnInit {

  constructor(public chat: ChatService) {
   
  }

 ngOnInit() {
   
   this.chat.getMessagesPrint().subscribe(()=> {

  console.log() })
  
   
 }





}



