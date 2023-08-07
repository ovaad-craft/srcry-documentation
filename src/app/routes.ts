import { Routes } from "@angular/router";
import { IntroductionPageComponent } from "./pages/site/introduction-page/introduction-page.component";
import { GettingStartedPageComponent } from "./pages/site/getting-started-page/getting-started-page.component";

export const SITEROUTES: Routes = [

    /*{path: 'home', component: IntroductionPageComponent},
    {path: 'getting-started', component: GettingStartedPageComponent},*/
    
    {
        path:'home',
        loadComponent: ()=> import('./pages/site/introduction-page/introduction-page.component')
        .then(mod => mod.IntroductionPageComponent)
    },
    {
        path: 'getting-started',
        loadComponent: ()=> import('./pages/site/getting-started-page/getting-started-page.component')
        .then(mod => mod.GettingStartedPageComponent)
    },
    {
        path: 'box-size-library',
        loadComponent: () => import('./pages/site/box-size-library/box-size-library.component')
        .then(mod => mod.BoxSizeLibraryComponent)
    },
    {
        path: 'text-size-library',
        loadComponent: ()=> import('./pages/site/text-size-library/text-size-library.component')
        .then(mod=> mod.TextSizeLibraryComponent)
    },
    {
        path: 'line-size-library',
        loadComponent: ()=> import('./pages/site/line-size-library/line-size-library.component')
        .then(mod => mod.LineSizeLibraryComponent)
    },
    {
        path: 'srcry-box-overview',
        loadComponent: ()=> import('./pages/site/srcry-box-overview-page/srcry-box-overview-page.component')
        .then(mod => mod.SrcryBoxOverviewPageComponent)
    },
    {
        path: 'base-size',
        loadComponent: ()=> import('./pages/site/base-size-page/base-size-page.component')
        .then(mod => mod.BaseSizePageComponent)
    },
    {
        path: 'edge-chase',
        loadComponent: ()=> import('./pages/site/edge-chase-page/edge-chase-page.component')
        .then(mod => mod.EdgeChasePageComponent)
    },
    {
        path: 'chase-stop',
        loadComponent: ()=> import('./pages/site/chase-stop-page/chase-stop-page.component')
        .then(mod => mod.ChaseStopPageComponent)
    },
    {
        path: 'squish-growth',
        loadComponent: ()=> import('./pages/site/squish-growth-page/squish-growth-page.component')
        .then(mod => mod.SquishGrowthPageComponent)
    },
    {
        path: 'stretch-shrink',
        loadComponent: ()=> import('./pages/site/stretch-shrink-page/stretch-shrink-page.component')
        .then(mod=> mod.StretchShrinkPageComponent)
    },
    {
        path: 'bleed',
        loadComponent: ()=> import('./pages/site/bleed-page/bleed-page.component')
        .then(mod=> mod.BleedPageComponent)
    },
    {
        path: 'srcry-text-overview',
        loadComponent: ()=> import('./pages/site/srcry-text-overview-page/srcry-text-overview-page.component')
        .then(mod => mod.SrcryTextOverviewPageComponent)
    },
    {
        path: 'text-size',
        loadComponent: ()=> import('./pages/site/text-size-page/text-size-page.component')
        .then(mod => mod.TextSizePageComponent)
    },
    {
        path: 'text-nudge-amount',
        loadComponent: ()=> import('./pages/site/text-nudge-amount-page/text-nudge-amount-page.component')
        .then(mod => mod.TextNudgeAmountPageComponent)
    },
    {
        path: 'kerning-nudge-amount',
        loadComponent: ()=> import('./pages/site/kerning-nudge-amount-page/kerning-nudge-amount-page.component')
        .then(mod => mod.KerningNudgeAmountPageComponent)
    },
    {
        path: 'leading-nudge-amount',
        loadComponent: ()=> import('./pages/site/leading-nudge-amount-page/leading-nudge-amount-page.component')
        .then(mod=> mod.LeadingNudgeAmountPageComponent)
    },
    {
        path: 'test-example-page',
        loadComponent: ()=> import('./pages/demonstrations/example-page/example-page.component')
        .then(mod => mod.ExamplePageComponent)
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/site/page-not-found-page/page-not-found-page.component')
        .then(mod => mod.PageNotFoundPageComponent)
    }
]