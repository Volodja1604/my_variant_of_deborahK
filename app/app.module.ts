import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpModule} from '@angular/http';
import {ProductDetailComponent} from './products/product-ditail.component';
import {WelcomeComponent} from './welcome.component';
import {routing} from './app.routing';

@NgModule({
    imports:      [ BrowserModule, HttpModule,routing ],
    declarations: [ AppComponent,
                    ProductListComponent,
                    ProductFilterPipe,
                    StarComponent,
                    ProductDetailComponent,
                    WelcomeComponent

                     ],
    providers:[ProductService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
