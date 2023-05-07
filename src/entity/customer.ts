import { Address } from './address';
export class Customer {
    private _id: string
    private _name: string = ""
    private _address!:Address 
    private _active: boolean = false

    constructor(id: string,  name: string) {  
        this._id = id
        this._name = name
        this.validate()
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }

        if (this._id.length === 0) {
            throw new Error("Id is required")
        }
    }

    getName() {
        return this._name
    }

    changeName(name: string) {
        this._name = name
        this.validate()
    }

    activate() {
        this._active = true
    }
}
