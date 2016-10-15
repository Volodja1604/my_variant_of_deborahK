"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome.component');
var product_list_component_1 = require('./products/product-list.component');
var product_ditail_component_1 = require('./products/product-ditail.component');
var APP_ROUTES = [
    { path: 'product-list', component: product_list_component_1.ProductListComponent },
    { path: 'product-list/:id', component: product_ditail_component_1.ProductDetailComponent },
    { path: '', component: welcome_component_1.WelcomeComponent },
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map