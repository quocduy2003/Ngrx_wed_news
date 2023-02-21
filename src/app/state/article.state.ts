import { Article } from "../models/article.model";

export interface ArticleState{
    article: Article[];
    isSuccesss:boolean;
    error:string;
    loading:boolean;
}