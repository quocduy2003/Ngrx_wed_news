import { Injectable } from "@angular/core";
import { createEffect, ofType,Actions } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Article } from "src/app/models/article.model";
import { ArticleService } from "src/app/services/article.service";
import * as ArticleActions from '../app/actions/article.action'

@Injectable()
export class ArticleEffects{
    constructor(private actions$ : Actions,private articleService: ArticleService){}
    getArticles$=createEffect(
        ()=>this.actions$.pipe(
            ofType(ArticleActions.getPerginate),
            switchMap((action)=>{
                return this.articleService.getArticle(action.page,action.itemPerpage);
            }),
            map((response)=>{
                return ArticleActions.getPerginateSucess({article: <Array<Article>>response});
            }),
            catchError((error)=>{
                return of(ArticleActions.getPerginateFailure({error: error.message}));
            }),
        )
    )
}