import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWebChatComponent } from './chat-web-chat.component';

describe('ChatWebChatComponent', () => {
  let component: ChatWebChatComponent;
  let fixture: ComponentFixture<ChatWebChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWebChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWebChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
