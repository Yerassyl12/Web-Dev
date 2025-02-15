import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Интерфейс для данных о продукте
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
}

interface ProductsByCategory {
  [key: number]: Product[]; // Индексация по числовому ключу (categoryId)
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule, RouterModule] 
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  mockProducts: ProductsByCategory = {
    1: [
      {id:1, name: 'Смартфон Apple iPhone 13 128Gb черный', price: 263521 , imageUrl: '/assets/phone_13_.jpg', description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.', rating: 5},
      {id:2, name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', price: 672664, imageUrl: '/assets/phone_16_pro.jpeg', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета...', rating: 5}
    ],
    2: [
      {id:3, name: 'Телефон', price: 15000, imageUrl: 'assets/phone.jpg' , description: '', rating: 5},
      {id:4, name: 'Ноутбук', price: 35000, imageUrl: 'assets/laptop.jpg' , description: '', rating: 5}
    ],
    3: [
      {id:5, name: 'Книга "Гарри Поттер"', price: 600, imageUrl: 'assets/book1.jpg', description: '', rating: 5},
      {id:6, name: 'Книга "Война и мир"', price: 500, imageUrl: 'assets/book2.jpg' , description: '', rating: 5}
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    const productId = Number(this.route.snapshot.paramMap.get('productId'));

    if (!isNaN(categoryId) && !isNaN(productId)) {
      this.product = this.mockProducts[categoryId]?.find(p => p.id === productId) || null;
    }
  }

  // Метод для открытия страницы с подробностями товара в новой вкладке
  openProductDetailInNewTab(): void {
    if (this.product) {
      const categoryId = this.route.snapshot.paramMap.get('categoryId');
      const productId = this.route.snapshot.paramMap.get('productId');
      
      // Формируем URL с параметрами для открытия в новой вкладке
      const url = `/category/${categoryId}/product/${productId}`;
      
      // Открываем URL в новой вкладке
      window.open(url, '_blank');
    }
  }

  closeTab(): void {
    window.close(); // Закрыть текущую вкладку
  }
}
