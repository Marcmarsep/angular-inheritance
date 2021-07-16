import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseSectionComponent} from './components/sections/base-section.component';
import {SectionAComponent} from './components/sections/section-a/section-a.component';
import {SectionBComponent} from './components/sections/section-b/section-b.component';
import {MenuComponent} from './shared/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BaseSectionComponent,
    SectionAComponent,
    SectionBComponent,
    MenuComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
