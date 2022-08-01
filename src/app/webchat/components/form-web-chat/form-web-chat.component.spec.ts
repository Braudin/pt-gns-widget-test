import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWebChatComponent } from './form-web-chat.component';

describe('FormWebChatComponent', () => {
  let component: FormWebChatComponent;
  let fixture: ComponentFixture<FormWebChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWebChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWebChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
