import { provideAnimations } from '@angular/platform-browser/animations';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { SITEROUTES } from './app/routes';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(SITEROUTES, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideAnimations(),
    importProvidersFrom(
      NgxGoogleAnalyticsModule.forRoot('G-HT13W96W03'),
      NgxGoogleAnalyticsRouterModule
    ),
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


bootstrapApplication(AppComponent, appConfig).catch((err:any) => console.error(err));
