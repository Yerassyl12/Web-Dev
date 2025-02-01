import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'products/:category_id',
      component: ProductsComponent,
      title: 'Home details',
    },
];
export default routeConfig;