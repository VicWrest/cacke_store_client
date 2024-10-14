import {makeAutoObservable} from "mobx"
import { addProductToBasket } from "../http/productAPI";

export default class ErrorStore{
    constructor(){
        this._error = null;
        this._isError = false;
        makeAutoObservable(this);
    }
    setError(error){
        this._error = error;
        this._isError = true;
        return;
    }
    setIsError(){
        return this._isError = true;
    }
    recessError(){
        this._error = null;
        return this._isError = false;
    }

    get error(){
        return this._error;
    }

    get isError(){
        return this._isError;
    }
}