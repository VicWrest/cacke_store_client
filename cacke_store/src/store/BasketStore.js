import {makeAutoObservable} from "mobx"

export default class BasketStore{
    constructor(){
        this._addProducts = [];
        makeAutoObservable(this);
    }
   async addToBasket(product){
        const productInBasket = this._addProducts.find((el) => el.id === product.id)
        productInBasket? this.moreQuantity(product) : this._addProducts.push({...product, quantity: 1});
   };
   removeAdBasket(product){
    this._addProducts = this._addProducts.filter(el => el.id != product.id);
    return;
   }
   async checkingProduct(product){
    const index = this._addProducts.find((el, index) => el.id === product.id? index : null)
    return index;
   }
   async moreQuantity(product){
        const index = this._addProducts.findIndex((el) => el.id === product.id);
        return ++this._addProducts[index].quantity;
   }
   async lessQuantity(product){
        const index = this._addProducts.findIndex((el) => el.id === product.id);
        return --this._addProducts[index].quantity;
   }
   get addProducts(){
    return this._addProducts;
   }
   get totalPrice() {
     return this._addProducts.reduce((acc, item) => {
       return acc += item.price*item.quantity;
     }, 0)
   }; 
}