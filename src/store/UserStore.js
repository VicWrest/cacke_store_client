import {makeAutoObservable} from "mobx"

export default class UserStore{
    constructor(){
        this._isAdmin = false;
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this)
    }

    setIsAdmin(bool){
        return this._isAdmin = bool;
    };

    setIsAuth(bool){
        return this._isAuth = bool;
    };

    setUser(user){
        return this._user = user;
    }

    get isAdmin(){
        return this._isAdmin;
    }

    get isAuth(){
        return this._isAuth;
    };

    get user(){
        return this.user;
    }
}