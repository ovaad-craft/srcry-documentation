import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BrowserAnimationsModule, provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    //NoopAnimationsModule,
    //BrowserAnimationsModule,
    NavbarComponent,
    SidebarComponent,
    AppRoutingModule
  ],
providers: [provideAnimations()]
})
export class AppModule { }
