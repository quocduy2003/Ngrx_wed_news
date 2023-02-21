import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleState } from './state/article.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wed_news_ngrx';
  article$: Observable<ArticleState>;
  constructor(private store:Store<{article:ArticleState}>){
    this.article$=this.store.select('article');
  }
}
