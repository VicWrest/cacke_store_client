import {makeAutoObservable} from "mobx"
import { addProductToBasket } from "../http/productAPI";

export default class BasketStore{
    constructor(){
        this._addProducts = [];
        this._dateAndTime = '2024-01-01T10:30';
        this._phone = '';
        makeAutoObservable(this);
    }

   async setAllProducts(products){
     this._addProducts = products;
};

async setDate(date){
     this._dateAndTime = date;
};
async setPhone(phone){
     this._phone = phone;
};
async addToBasket({productItem, korzhId, weightId}){
     if(!weightId) weightId = productItem.weights[0].id;
     addProductToBasket({productId: productItem.id, korzhId, weightId})
     .then(products => {
          this.setAllProducts(products)})
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
   async updateKorzh(product){
     const index = this._addProducts.findIndex((el) => el.id === product.id);
     this._addProducts[index].basket_product.korzhId = product.basket_product.korzhId;
     return;
}
   get addProducts(){
    return this._addProducts;
   }
   get totalPrice() {
     return this._addProducts.reduce((acc, item) => {
          const price = item.weight.price;
          const quantity = item.quantity;
       return acc += price * quantity;
     }, 0)
   };
   
   get date(){
     return this._dateAndTime;
};

get phone(){
     return this._phone;
};
}