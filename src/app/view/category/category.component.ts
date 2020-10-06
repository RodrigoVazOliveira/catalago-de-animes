import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  data;

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(response => {
      this.data = response.data;
    }, err => {
      this.data = err;
    });
  }

}
