import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../products';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent {
  @Input() category!:Category;
}
