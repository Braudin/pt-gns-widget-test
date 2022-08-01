import { Component, OnInit } from '@angular/core'
import { DataForm } from '../../interface/dataform'

@Component({
  selector: 'app-webchat',
  templateUrl: './webchat.component.html',
  styleUrls: ['./webchat.component.scss'],
})
export class WebchatComponent {
  dataOk = true
  dataForm?: DataForm

  public dataComplete($event: DataForm) {
    this.dataForm = $event
    this.dataOk = true
  }
}
