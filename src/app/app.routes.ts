import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

import { FeaturesComponent
 } from './features/features.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'about', component: AboutComponent },
    { path:'services', component: ServicesComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'contact', component: ContactComponent },

    { path: '', redirectTo: '/home', pathMatch:'full' } // For any unknown paths, redirect to home page
];
