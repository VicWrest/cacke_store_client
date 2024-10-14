import {makeAutoObservable} from "mobx"

export default class ReviewStore{
    constructor(){
        this._reviews = [];
        makeAutoObservable(this);
    }
   async addReviews(posts){
    this._reviews = posts;
    return;
   };
    get reviews(){
        return this._reviews;
   }
}