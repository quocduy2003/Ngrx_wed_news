import { createReducer, on } from "@ngrx/store";
import { ArticleState } from "../state/article.state";
import * as ArticleAction from '../actions/article.action'

const initialState: ArticleState={
    article: [],
    isSuccesss:true,
    error: 'string',
    loading:false,
}
export const articleReducer=createReducer(
    initialState,
    on(ArticleAction.getPerginate,(state)=>({...state,loading:true})),
    on(ArticleAction.getPerginateSucess,(state,action)=>({...state,article:action.article})),
    on(ArticleAction.getPerginateSucess,(state,action)=>({...state,loading:false,isSuccesss:true})),
    )
    
