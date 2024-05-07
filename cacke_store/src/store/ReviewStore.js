import {makeAutoObservable} from "mobx"

export default class ReviewStore{
    constructor(){
        this._reviews = [{id: 1, description: "VERY GOOD",img: ""}];
        makeAutoObservable(this);
    }
   async addReview(post){
        return this._reviews.push(post);
   };
    get reviews(){
        return this._reviews;
   }
//    removeAdBasket(product){
//     this._addProducts = this._addProducts.filter(el => el.id != product.id);
//     return;
//    }
//    async checkingProduct(product){
//     const index = this._addProducts.find((el, index) => el.id === product.id? index : null)
//     return index;
//    }
//    async moreQuantity(product){
//         const index = this._addProducts.findIndex((el) => el.id === product.id);
//         return ++this._addProducts[index].quantity;
//    }
//    async lessQuantity(product){
//         const index = this._addProducts.findIndex((el) => el.id === product.id);
//         return --this._addProducts[index].quantity;
//    }

//    get totalPrice() {
//      return this._addProducts.reduce((acc, item) => {
//        return acc += item.price*item.quantity;
//      }, 0)
//    }; 
}