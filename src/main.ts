import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    /*provideRouter(),*/
    provideAnimations()
  ]
};


bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
