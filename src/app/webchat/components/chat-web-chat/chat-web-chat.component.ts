import { Component, OnInit } from '@angular/core'
import { WebChatService } from '../../services/web-chat.service'

@Component({
  selector: 'app-chat-web-chat',
  templateUrl: './chat-web-chat.component.html',
  styleUrls: ['./chat-web-chat.component.scss'],
})
export class ChatWebChatComponent implements OnInit {
  constructor(private webChatService: WebChatService) {}

  workOrderDetails() {
    this.webChatService.getHealth().subscribe(resp => {
      console.log(resp)
    })
  }

  ngOnInit(): void {
    this.workOrderDetails()
  }
}
