import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
// import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
// import { MatListModule } from '@angular/material/list'
// import { MatDialogModule } from '@angular/material/dialog'
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
// import { MatSidenavModule } from '@angular/material/sidenav'
// import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatExpansionModule } from '@angular/material/expansion'
// import { MatMenuModule } from '@angular/material/menu'
// import { MatBadgeModule } from '@angular/material/badge'
// import { MatTableModule } from '@angular/material/table'
// import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
// import { MatPaginatorModule } from '@angular/material/paginator'
// import { MatChipsModule } from '@angular/material/chips'
// import { MatTabsModule } from '@angular/material/tabs'
// import { MatDatepickerModule } from '@angular/material/datepicker'
// import { MatNativeDateModule } from '@angular/material/core'
// import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
// import { MatSlideToggleModule } from '@angular/material/slide-toggle'
// import { MatButtonToggleModule } from '@angular/material/button-toggle'

const impExp = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
]

@NgModule({
  declarations: [],
  imports: [...impExp],
  exports: [...impExp],
})
export class AgMaterialModule {}
