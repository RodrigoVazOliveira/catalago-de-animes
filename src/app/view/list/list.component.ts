import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data;

  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.service.getAnimesList().subscribe(response => {
      this.data = response.data;
      console.log(this.data);
    }, err => {
      this.data = err;
    });
  }

}
