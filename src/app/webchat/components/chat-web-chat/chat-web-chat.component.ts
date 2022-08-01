import { Component, OnInit } from '@angular/core'
import { WebChatService } from '../../services/web-chat.service'

@Component({
  selector: 'app-chat-web-chat',
  templateUrl: './chat-web-chat.component.html',
  styleUrls: ['./chat-web-chat.component.scss'],
})
export class ChatWebChatComponent implements OnInit {
  active = false
  constructor(private webChatService: WebChatService) {}

  workOrderDetails() {
    this.webChatService.getHealth().subscribe(resp => {
      setTimeout(() => {
        // Para prueba
        this.active = resp
      }, 2000)
    })
  }

  ngOnInit(): void {
    this.workOrderDetails()
  }
}
