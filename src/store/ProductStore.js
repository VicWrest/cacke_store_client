import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = [];
        this._products = [];
        this._product = [];
        this._parameters = [];
        this._selectedType = {};
        this._selectedProduct = {};
        this._selectedKorzh = {};
        this._korzh = [];
        this.basket = [];
        makeAutoObservable(this)
    }

    setTypes(types){
        return this._types = types;
    }

    setProducts(products){
        return this._products = products;
    }
    setProductById(product){
        return this._product = product;
    }
    setSelectedType(type){
        return this._selectedType = type;
    }
    setSelectedProduct(product){
        return this._selectedProduct = product;
    }
    setKorzh(korzh){
        return this._korzh = korzh;
    }
    setSelectedKorzh(id){
        return this._selectedKorzh = id;
    }
    get types(){
        return this._types;
    }

    get products(){
        return this._products;
    }
    get productById(){
        return this._product;
    }
    get parameters(){
        return this._parameters;
    }
    get selectedType(){
        return this._selectedType;
    }
    get selectedProduct(){
        return this._selectedProduct;
    }
    get korzh(){
        return this._korzh;
    }
    get selectedKorzh(){
        return this._selectedKorzh;
    };


}