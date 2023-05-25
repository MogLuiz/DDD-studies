import { Address } from './address';
export class Customer {
    private _id: string
    private _name: string = ""
    private _address!:Address 
    private _active: boolean = false
    private _rewardPoints: number = 0

    constructor(id: string,  name: string) {  
        this._id = id
        this._name = name
        this.validate()
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required")
        }

        if (this._name.length === 0) {
            throw new Error("Name is required")
        } 
    }

    getName() {
        return this._name
    }

    get id() {
        return this._id
    }

    get rewardPoints() {
        return this._rewardPoints
    }

    changeName(name: string) {
        this._name = name
        this.validate()
    }

    addAddress(address: Address) {
        this._address = address
    }

    isActive() {
        return this._active
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer")
        }
        
        this._active = true
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points
    }

    deactivate() {
        this._active = false
    }
}