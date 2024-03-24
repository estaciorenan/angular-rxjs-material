import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './components/buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './components/formField-input/formField-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DatePickerComponent } from './components/datePicker/datePicker.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  { path: 'voltar', redirectTo: '', pathMatch: 'full' },
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formfield', component: FormFieldInputComponent },
  { path: 'progress', component: ProgressSpinnerComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
