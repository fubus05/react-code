import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [
            {id: 1, name: 'Product One'},
            {id: 2, name: 'Product Two'},
        ]
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    get products() {
        return this._products
    }
}