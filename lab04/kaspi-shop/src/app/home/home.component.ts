import { Component,inject } from '@angular/core';
import {Products} from '../products';
import {ProductsComponent} from '../products/products.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productsList: Products[]=[
    {id:1, name: 'Смартфон Apple iPhone 13 128Gb черный', price: 263521 , imageUrl: '/assets/phone_13_.jpg', description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR' ,rating: 5,link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'},
    {id:2, name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', price: 686431 , imageUrl: '/assets/photo_id_2.jpeg', description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.' ,rating: 5,link:'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'},
    {id:3, name: 'Пылесос Deerma DX700 белый', price: 16979 , imageUrl: 'assets/photo_id_3.jpg' , description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос.',rating: 5,link:'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'},
    {id:4, name: 'Кухонные весы Generic SF-400', price: 815, imageUrl: 'assets/photo_id_4.jpg' , description: 'Современные электронные кухонные весы имеют элегантную платформу из пластика.',rating: 5,link:'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000'},
    {id:5, name: 'МОБИЛСЕРВИС набор для ремонта шин TR414C-ZN', price: 48, imageUrl: 'assets/photo_id_5.jpg', description: '' ,rating: 5,link:'https://kaspi.kz/shop/p/mobilservis-nabor-dlja-remonta-shin-tr414c-zn-116867546/?c=750000000'},
    {id:6, name: 'Aroma Car ароматизатор жидкий 989805 Ocean, Ritz-Carlton, Cologne 30 мл', price: 4800, imageUrl: 'assets/photo_id_6.jpg' , description: 'Многоразовый автомобильный ароматизатор с умным автоматическим распылителем - это элитный аксессуар.',rating: 5,link:'https://kaspi.kz/shop/p/aroma-car-aromatizator-zhidkii-989805-ocean-ritz-carlton-cologne-30-ml-112318956/?c=750000000'},
    {id:7, name:'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',price:113206,imageUrl:'/assets/photo_id_7.jpg',description:'Как и предыдущая версия, наушники снабжены активным шумоподавлением.',rating:5,link:'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'},
    {id:8, name:'Умная колонка Яндекс Станция Лайт 2 фиолетовый',price:29079,imageUrl:'/assets/photo_id_8.jpg',description:'',rating:5,link:'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000'},
    {id:9, name:'Бумажные салфетки Карина DOSTYQ 200 шт',price:269,imageUrl:'/assets/photo_id_9.jpeg',description:'Белые однослойные салфетки из 100% целлюлозы Карина Dostyq.',rating:5,link:'https://kaspi.kz/shop/p/bumazhnye-salfetki-karina-dostyq-200-sht-110230386/?c=750000000'},
    {id:10, name:'FLO кондиционер Pure Breeze 1000 мл',price:979 ,imageUrl:'/assets/photo_id_10.jpg',description:'Ополаскиватель для тканей Flo Pure глубоко проникает в структуру материала.',rating:5,link:'https://kaspi.kz/shop/p/flo-konditsioner-pure-breeze-1000-ml-100234363/?c=750000000'}
  ];
}
