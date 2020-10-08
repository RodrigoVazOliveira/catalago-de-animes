import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private URL_BASE:string = `https://kitsu.io/api/edge/categories?page[limit]=200`;
  private URL_BASE_ANIME:string = 'https://kitsu.io/api/edge/categories/';

  constructor(private http: HttpClient) { }

  public getCategories():Observable<any> {
    return this.http.get(this.URL_BASE);
  }

  public getAnimeByCategory(id:string):Observable<any> {
    return this.http.get(`${this.URL_BASE_ANIME}${id}/anime`);
  }

}
