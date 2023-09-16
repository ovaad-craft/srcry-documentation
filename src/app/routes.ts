import { Routes } from "@angular/router";
import { IntroductionPageComponent } from "./pages/introduction-page/introduction-page.component";
import { GettingStartedPageComponent } from "./pages/getting-started-page/getting-started-page.component";

export const SITEROUTES: Routes = [

    /*{path: 'home', component: IntroductionPageComponent},
    {path: 'getting-started', component: GettingStartedPageComponent},*/
    
    {
        path:'home',
        loadComponent: ()=> import('./pages/introduction-page/introduction-page.component')
        .then(mod => mod.IntroductionPageComponent)
    },
    {
        path: 'getting-started',
        loadComponent: ()=> import('./pages/getting-started-page/getting-started-page.component')
        .then(mod => mod.GettingStartedPageComponent)
    },
    {
        path: 'box-size-library',
        loadComponent: () => import('./pages/box-size-library/box-size-library.component')
        .then(mod => mod.BoxSizeLibraryComponent)
    },
    {
        path: 'text-size-library',
        loadComponent: ()=> import('./pages/text-size-library/text-size-library.component')
        .then(mod=> mod.TextSizeLibraryComponent)
    },
    {
        path: 'line-size-library',
        loadComponent: ()=> import('./pages/line-size-library/line-size-library.component')
        .then(mod => mod.LineSizeLibraryComponent)
    },
    {
        path: 'srcry-box-overview',
        loadComponent: ()=> import('./pages/srcry-box-overview-page/srcry-box-overview-page.component')
        .then(mod => mod.SrcryBoxOverviewPageComponent)
    },
    {
        path: 'base-size',
        loadComponent: ()=> import('./pages/base-size-page/base-size-page.component')
        .then(mod => mod.BaseSizePageComponent)
    },
    {
        path: 'crush-gap',
        loadComponent: ()=> import('./pages/crush-gap-page/crush-gap-page.component')
        .then(mod => mod.CrushGapPageComponent)
    },
    {
        path: 'edge-chase',
        loadComponent: ()=> import('./pages/edge-chase-page/edge-chase-page.component')
        .then(mod => mod.EdgeChasePageComponent)
    },
    {
        path: 'chase-stop',
        loadComponent: ()=> import('./pages/chase-stop-page/chase-stop-page.component')
        .then(mod => mod.ChaseStopPageComponent)
    },
    {
        path: 'squish-growth',
        loadComponent: ()=> import('./pages/squish-growth-page/squish-growth-page.component')
        .then(mod => mod.SquishGrowthPageComponent)
    },
    {
        path: 'stretch-shrink',
        loadComponent: ()=> import('./pages/stretch-shrink-page/stretch-shrink-page.component')
        .then(mod=> mod.StretchShrinkPageComponent)
    },
    {
        path: 'bleed',
        loadComponent: ()=> import('./pages/bleed-page/bleed-page.component')
        .then(mod=> mod.BleedPageComponent)
    },
    {
        path: 'srcry-text-overview',
        loadComponent: ()=> import('./pages/srcry-text-overview-page/srcry-text-overview-page.component')
        .then(mod => mod.SrcryTextOverviewPageComponent)
    },
    {
        path: 'text-size',
        loadComponent: ()=> import('./pages/text-size-page/text-size-page.component')
        .then(mod => mod.TextSizePageComponent)
    },
    {
        path: 'text-nudge-amount',
        loadComponent: ()=> import('./pages/text-nudge-amount-page/text-nudge-amount-page.component')
        .then(mod => mod.TextNudgeAmountPageComponent)
    },
    {
        path: 'kerning-nudge-amount',
        loadComponent: ()=> import('./pages/kerning-nudge-amount-page/kerning-nudge-amount-page.component')
        .then(mod => mod.KerningNudgeAmountPageComponent)
    },
    {
        path: 'leading-nudge-amount',
        loadComponent: ()=> import('./pages/leading-nudge-amount-page/leading-nudge-amount-page.component')
        .then(mod=> mod.LeadingNudgeAmountPageComponent)
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