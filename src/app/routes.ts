import { Routes } from "@angular/router";

export const SITEROUTES: Routes = [
    
    {
        path:'home',
        loadComponent: ()=> import('./pages/introduction-page/introduction-page.component')
        .then(mod => mod.IntroductionPageComponent),
        data: {state: 'homePage'}
    },
    {
        path: 'getting-started',
        loadComponent: ()=> import('./pages/getting-started-page/getting-started-page.component')
        .then(mod => mod.GettingStartedPageComponent),
        data: {state: 'gettingStarted'}
    },
    {
        path: 'box-size-library',
        loadComponent: () => import('./pages/box-size-library/box-size-library.component')
        .then(mod => mod.BoxSizeLibraryComponent),
        data: {state: 'boxSizeLibrary'}
    },
    {
        path: 'text-size-library',
        loadComponent: ()=> import('./pages/text-size-library/text-size-library.component')
        .then(mod=> mod.TextSizeLibraryComponent),
        data: {state: 'textSizLibrary'}
    },
    {
        path: 'line-size-library',
        loadComponent: ()=> import('./pages/line-size-library/line-size-library.component')
        .then(mod => mod.LineSizeLibraryComponent),
        data: {state: 'lineSizeLibrary'}
    },
    {
        path: 'srcry-box-overview',
        loadComponent: ()=> import('./pages/srcry-box-overview-page/srcry-box-overview-page.component')
        .then(mod => mod.SrcryBoxOverviewPageComponent),
        data: {state: 'srcryBoxOverview'}
    },
    {
        path: 'base-size',
        loadComponent: ()=> import('./pages/base-size-page/base-size-page.component')
        .then(mod => mod.BaseSizePageComponent),
        data: {state: 'baseSize'}
    },
    {
        path: 'crush-gap',
        loadComponent: ()=> import('./pages/crush-gap-page/crush-gap-page.component')
        .then(mod => mod.CrushGapPageComponent),
        data: {state: 'crushGap'}
    },
    {
        path: 'edge-chase',
        loadComponent: ()=> import('./pages/edge-chase-page/edge-chase-page.component')
        .then(mod => mod.EdgeChasePageComponent),
        data: {state: 'edgeChase'}
    },
    {
        path: 'squish-growth',
        loadComponent: ()=> import('./pages/squish-growth-page/squish-growth-page.component')
        .then(mod => mod.SquishGrowthPageComponent),
        data: {state: 'squishGrowth'}
    },
    {
        path: 'stretch-shrink',
        loadComponent: ()=> import('./pages/stretch-shrink-page/stretch-shrink-page.component')
        .then(mod=> mod.StretchShrinkPageComponent),
        data: {state: 'stretchShrink'}
    },
    {
        path: 'srcry-text-overview',
        loadComponent: ()=> import('./pages/srcry-text-overview-page/srcry-text-overview-page.component')
        .then(mod => mod.SrcryTextOverviewPageComponent),
        data: {state: 'srcryTextOverview'}
    },
    {
        path: 'text-size',
        loadComponent: ()=> import('./pages/text-size-page/text-size-page.component')
        .then(mod => mod.TextSizePageComponent),
        data: {state: 'textSize'}
    },
    {
        path: 'kerning-nudge-amount',
        loadComponent: ()=> import('./pages/kerning-nudge-amount-page/kerning-nudge-amount-page.component')
        .then(mod => mod.KerningNudgeAmountPageComponent),
        data: {state: 'kerningNudgeAmount'}
    },
    {
        path: 'leading-nudge-amount',
        loadComponent: ()=> import('./pages/leading-nudge-amount-page/leading-nudge-amount-page.component')
        .then(mod=> mod.LeadingNudgeAmountPageComponent),
        data: {state: 'leadingNudgeAmount'}
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/page-not-found-page/page-not-found-page.component')
        .then(mod => mod.PageNotFoundPageComponent)
    }
]