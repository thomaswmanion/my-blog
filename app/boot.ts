import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {CartService} from './components/cart/services/cart-service';
bootstrap(AppComponent, [CartService, ROUTER_PROVIDERS, HTTP_PROVIDERS]);

