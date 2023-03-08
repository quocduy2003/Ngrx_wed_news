import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ArticleState } from './state/article.state';
import * as ArticleAction from '../app/actions/article.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wed_news_ngrx';
  article$: Observable<ArticleState>;
  constructor(private store:Store<{article:ArticleState}>,public authService:AuthService){
    this.article$=this.store.select('article');
  }
  ngOnInit(): void {
    this.store.dispatch(
      ArticleAction.getPerginate({page:1,itemPerpage:2})
    );
  }
}
