import { Component,inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { Category } from '../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryDetailComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsService: ProductsService = inject(ProductsService);
  categoryList: Category[]=[];
  constructor(){
    this.categoryList=this.productsService.getAllCatgories();
  }
  

}
