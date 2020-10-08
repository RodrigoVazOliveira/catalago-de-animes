import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  private id:string;
  public data;

  constructor(private service: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.service.getAnimeByCategory(this.id).subscribe(response => {
      this.data = response.data;
    }, err => {
      this.data = false;
    })
  }

}
