import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private URL_BASE:string = `https://kitsu.io/api/edge/anime?page[limit]=20`;

  constructor(private http: HttpClient) {}

  getAnimesList():Observable<any> {
    return this.http.get(this.URL_BASE);
  }


}
