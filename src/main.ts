import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SITEROUTES } from './app/routes';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(SITEROUTES),
    provideAnimations(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          css: () => import('highlight.js/lib/languages/css')
        },
        themePath: '../node_modules/highlight.js/styles/a11y-dark.css'
      }
    }
  ]
};


bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
