import { createAction, props } from "@ngrx/store";
import { Article } from "../models/article.model";



export const getPerginate= createAction('[Article] Get Peginate', props<{page:number,itemPerpage:number}>());
export const getPerginateSucess=createAction('[Article] Get Peginate Sucess',props<{article: Article[]}>());
export const getPerginateFailure = createAction('[Article] Get Peginate Failure',props<{error:string}>());