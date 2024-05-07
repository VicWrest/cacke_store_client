import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = [
            {id: 1, name: "Бенто-торт", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILenUyLhAtFhPuas28-VU1KeMjWgiJEmOwFk4AXFS7g&s'},
            {id: 2, name: "Кейки", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLKN24Zm2i4sBqA4rHA0QfeOI9MIYhJOd0mb7TszeEA&s'},
            {id: 3, name: "Капкейки", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILenUyLhAtFhPuas28-VU1KeMjWgiJEmOwFk4AXFS7g&s'},
            {id: 4, name: "Торт", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILenUyLhAtFhPuas28-VU1KeMjWgiJEmOwFk4AXFS7g&s'}
        ];
        this._products = [
            {id: 1, name: "Бенто-торт сникерс", type:'торт', price: 4000, img: 'https://www.google.com/imgres?q=%D0%B1%D0%B5%D0%BD%D1%82%D0%BE%20%D1%82%D0%BE%D1%80%D1%82%20%D1%81%D0%BD%D0%B8%D0%BA%D0%B5%D1%80%D1%81&imgurl=https%3A%2F%2Flakomka.me%2Fwp-content%2Fuploads%2F2022%2F07%2FIMG_3896.isp.2.jpg&imgrefurl=https%3A%2F%2Flakomka.me%2Fproduct%2Fbento-nachinka-snikers%2F&docid=s3dHJkJdT7j4tM&tbnid=gk6B4EDjyVqLFM&vet=12ahUKEwjIh7CXg7qFAxX0FBAIHW3ECgwQM3oECGYQAA..i&w=2434&h=2434&hcb=2&ved=2ahUKEwjIh7CXg7qFAxX0FBAIHW3ECgwQM3oECGYQAA'},
            {id: 2, name: "Бенто-торт шоколадный", type:'торт', price: 4000, img: 'https://cakes.ru/wp-content/uploads/2022/10/minimalistichnyi-shokoladnyi-bento-tort-s-nadpisiu.jpg'},
            {id: 3, name: "Кейки с вишней 6 шт", type:'кейк', price: 1500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLKN24Zm2i4sBqA4rHA0QfeOI9MIYhJOd0mb7TszeEA&s'},
            {id: 4, name: "Кейки с карамелью 6 шт", type:'кейк', price: 1500, img: 'https://static.tildacdn.com/tild6362-6339-4836-a361-613961326131/M9Zp0JRik2Y.jpg'}
        ];
        this._parameters = [
            {id: 1, title: "Тип", description:'Торт'},
            {id: 2, title: "Вес", description:'2 кг'},
            {id: 3, title: "Состав", description:'Яйцо, сахар, ванилин'}
        ];
        this._selectedType = {};
        this._selectedProduct = {};
        this.korzh = [
            {id: 1, name: "Шоколадный"},
            {id: 2, name: "Ванильный"}
        ];
        this.basket = [{id: 1, name: "Бенто-торт сникерс", type:'торт', price: 4000, img: 'https://cakes.ru/wp-content/uploads/2022/10/minimalistichnyi-shokoladnyi-bento-tort-s-nadpisiu.jpg'}]
        makeAutoObservable(this)
    }

    setTypes(types){
        return this._types = types;
    }

    setProducts(products){
        return this._products = products;
    }
    setSelectedType(type){
        return this._selectedType = type;
    }
    setSelectedProduct(product){
        return this._selectedProduct = product;
    }
    get types(){
        return this._types;
    }

    get products(){
        return this._products;
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
}