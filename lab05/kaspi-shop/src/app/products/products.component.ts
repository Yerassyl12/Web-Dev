import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule,RouterModule]
})
export class ProductsComponent{
  route: ActivatedRoute=inject(ActivatedRoute);
  productService=inject(ProductsService);
  products: Products | undefined;

  productsId=0;
  constructor(){
    const  productId=Number(this.route.snapshot.params['id']);
    this.products = this.productService.getProductsById(productId);
  }
}
