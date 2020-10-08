import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchData;
  public searchWord:string;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  public search():void {
    this.service.getSearch(this.searchWord).subscribe(response => {
      this.searchData = response.data;
    }, err => {
      this.searchData = false;
    });
  }

}
