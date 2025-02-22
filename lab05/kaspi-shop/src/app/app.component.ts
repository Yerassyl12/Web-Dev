import { Component} from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule
import {HomeComponent} from './home/home.component'; 
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,CommonModule,RouterModule]
})

export class AppComponent {
  title = 'shop-app';
}
