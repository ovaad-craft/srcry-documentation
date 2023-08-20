import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SITEROUTES } from './app/routes';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(SITEROUTES),
    provideAnimations(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          css: () => import('highlight.js/lib/languages/css')
        }
      }
    }
  ]
};


bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
