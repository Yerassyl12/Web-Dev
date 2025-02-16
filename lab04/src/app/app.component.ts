import { Component } from '@angular/core';
//import { RouterModule } from '@angular/router';  // Импортируем RouterModule для маршрутизации
import { ProductsComponent } from './components/products/products.component';  // Импортируем ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Убедитесь, что это Standalone компонент
  imports: [ProductsComponent],  // Добавляем RouterModule в imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab04';
}
