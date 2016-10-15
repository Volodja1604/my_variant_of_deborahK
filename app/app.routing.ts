import {Routes,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-ditail.component';
const APP_ROUTES:Routes=[
    {path:'product-list', component:ProductListComponent},
    {path:'product-list/:id', component:ProductDetailComponent},
    {path: '', component:WelcomeComponent},

];
export const routing=RouterModule.forRoot(APP_ROUTES);