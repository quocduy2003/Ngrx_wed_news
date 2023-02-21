import { createAction, props } from "@ngrx/store";
import { Article } from "../models/article.model";



export const getPerginate= createAction('[Article] Get Perginate', props<{page:number,itemPerpage:number}>());
export const getPerginateSucess=createAction('[Article] Get Perginate Sucess',props<{article: Article[]}>());
export const getPerginateFailure = createAction('[Article] Get Perginate Failure',props<{error:string}>());