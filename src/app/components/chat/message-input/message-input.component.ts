import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  message: string;
  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send() {
   
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
