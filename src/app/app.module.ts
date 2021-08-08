import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './lateralMenu/lateralMenu.component';
import { IconoComponent } from './lateralMenu/icono/icono.component';
import { SectionComponent } from './section/section.component';
import { PersonalInfoSectionComponent } from './section/sections/personalInfoSection.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    IconoComponent,
    SectionComponent,
    PersonalInfoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
