import { Address } from './address';
export class Customer {
    _address!:Address
    _active: boolean = false

    constructor(private id: string, private name: string) {  
        this.validate()
    }

    validate() {
        if (this.name.length === 0) {
            throw new Error("Name is required")
        }

        if (this.id.length === 0) {
            throw new Error("Id is required")
        }
    }

    activate() {
        this._active = true
    }
}
