import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoSectionComponent } from './section/sections/personalInfoSection.component';


const routes: Routes = [
  {path:'home', component:PersonalInfoSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
