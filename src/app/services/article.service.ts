import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }
  url="https://social.runwayclub.dev/api/articles/latest";
  getArticle(page:number,itemPerPage:number){
    return this.httpClient.get(`${this.url}?page=${page}&per_page=${itemPerPage}`);
  }
}
