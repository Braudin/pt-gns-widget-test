import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CONTRYES, MSG_ERROR, PATTERNS } from 'src/app/config/global'
import { TYPES_IDS } from '../../../config/global'
import { DataForm } from '../../interface/dataform'

const TYPE_ERROR: any = {
  idType: { required: MSG_ERROR.required },
  id: {
    required: MSG_ERROR.required,
    minlength: MSG_ERROR.minlength,
    pattern: MSG_ERROR.pattern,
  },
  country: { required: MSG_ERROR.required },
  name: { required: MSG_ERROR.required, pattern: MSG_ERROR.pattern },
  lastname: { required: MSG_ERROR.required, pattern: MSG_ERROR.pattern },
  email: { required: MSG_ERROR.required, pattern: MSG_ERROR.pattern },
  phone: { required: MSG_ERROR.required, pattern: MSG_ERROR.pattern },
  summary: { required: MSG_ERROR.required },
  policies: {
    required: MSG_ERROR.required,
    requiredTrue: MSG_ERROR.requiredTrue,
  },
}

@Component({
  selector: 'app-form-web-chat',
  templateUrl: './form-web-chat.component.html',
  styleUrls: ['./form-web-chat.component.scss'],
})
export class FormWebChatComponent implements OnInit {
  @Output() sendDataEvent = new EventEmitter<DataForm>()
  showForm = false
  sending = false
  form: FormGroup = this.fb.group({})
  typesIDs = TYPES_IDS
  countryes = CONTRYES
  constructor(private fb: FormBuilder) {}

  formBuilder() {
    this.form = this.fb.group({
      idType: ['', [Validators.required]],
      id: [
        '',
        [
          Validators.required,
          Validators.pattern(PATTERNS.patternNumber),
          Validators.minLength(6),
        ],
      ],
      country: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.patternName)],
      ],
      lastname: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.patternName)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.patternEmail)],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern(PATTERNS.patternPhone)],
      ],
      summary: ['', [Validators.required]],
      policies: [null, [Validators.requiredTrue]],
    })
    this.showForm = true
  }

  onSubmit(): void {
    if (this.form.valid && !this.sending) {
      this.sending = true
      const DATA: DataForm = this.form.value
      this.sendDataEvent.emit(this.form.value)
    }
  }

  public getError(controlName: string): string {
    let error = ''
    const control = this.form.get(controlName)
    if (control?.touched && control?.errors !== null) {
      let key = Object.keys(control.errors)[0]
      let value = Object.values(control?.errors)[0]
      error = TYPE_ERROR[controlName][key]
      console.log(key)
    }
    return error
  }

  ngOnInit(): void {
    this.formBuilder()
  }
}
