import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Products} from '../products';


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent{
  @Input() products!:Products;
  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.products.name + ' - ' + this.products.link)}`;
  }
}
