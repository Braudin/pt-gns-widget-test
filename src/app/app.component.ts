import { Component } from '@angular/core'
import { MODULES, MODULES_LIST } from './config/global'
import { module } from './interface/general'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gns-widget'
  active = false
  minimize = false
  modules = MODULES
  modulesLists = MODULES_LIST
  activeModule: module | null = this.modulesLists[0]

  public toggleActive() {
    this.active = !this.active
  }

  public changeModule(moduleActive: module) {
    this.activeModule = moduleActive
  }

  public close() {
    this.activeModule = null
    this.minimize = false
  }

  public minimizeMod() {
    this.minimize = !this.minimize
  }
}
