import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './section/sections/home/home';
import { PersonalInfoSectionComponent } from './section/sections/personal-info-section/personalInfoSection.component';
import { StudiesComponent } from './section/sections/studies/studies';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:PersonalInfoSectionComponent},
  {path:'studies', component:StudiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
