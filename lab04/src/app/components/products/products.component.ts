import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Импортируем CommonModule для работы с *ngFor

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],  // Добавляем CommonModule в imports
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Apple iPhone 13',
      description: 'Смартфон Apple iPhone 13, 128GB, синий',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h4c/63802126753822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h18/63802127745054.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h38/63802128091934.jpg'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-101758533/'
    },
    {
      name: 'Samsung Galaxy S22',
      description: 'Смартфон Samsung Galaxy S22, 256GB, черный',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h6c/63802129120798.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/h2c/63802129463646.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h4c/63802129741006.jpg'
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-256gb-chernyi-101768612/'
    }
    // Добавьте еще товары по аналогии
  ];

  shareOnWhatsApp(link: string) {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(link: string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
}
