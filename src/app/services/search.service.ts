import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URL_BASE:string = 'https://kitsu.io/api/edge/anime?filter[text]=';

  constructor(private http: HttpClient) { }

  public getSearch( search: string ):Observable<any> {
    return this.http.get(this.URL_BASE + search);
  }
}
