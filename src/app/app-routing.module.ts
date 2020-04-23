import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', redirectTo: '/details', pathMatch: 'full' },
  {path:'forms', component: FormComponent},
  {path:'details', component: DetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
