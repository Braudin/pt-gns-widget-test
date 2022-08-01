import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormWebChatComponent } from './components/form-web-chat/form-web-chat.component'
import { WebchatComponent } from './components/webchat/webchat.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AgMaterialModule } from '../ag-material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ChatWebChatComponent } from './components/chat-web-chat/chat-web-chat.component'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor'

const COMPONENTS_EXPORT = [
  WebchatComponent,
  FormWebChatComponent,
  ChatWebChatComponent,
]

@NgModule({
  declarations: [...COMPONENTS_EXPORT],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [...COMPONENTS_EXPORT, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    HttpClient,
  ],
})
export class WebchatModule {}
