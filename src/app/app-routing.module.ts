import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './components/buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './components/formField-input/formField-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  { path: 'voltar', redirectTo: '', pathMatch: 'full' },
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formfield', component: FormFieldInputComponent },
  { path: 'progress', component: ProgressSpinnerComponent },
  { path: 'spinner', component: SpinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
