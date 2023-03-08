import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleState } from 'src/app/state/article.state';
import * as ArticleActions from '../../actions/article.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  article$:Observable<ArticleState> ;
  constructor(public authService:AuthService,private store:Store<{article:ArticleState}>,private articleService:ArticleService){
    this.article$=this.store.select('article');
    this.articleService.getArticle(1,2).subscribe((data)=>{
      console.log(data);
    })
  }
}
