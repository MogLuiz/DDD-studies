import { Customer } from "./customer"

describe("Customer unir tests", () => {
    it("should throw new error when id is empty", () => {
       expect(() => {
        new Customer("", "John Doe")
       }).toThrowError("Id is required")
    })

    it("should throw new error when name is empty", () => {
       expect(() => {
        new Customer("123", "")
       }).toThrowError("Name is required")
    })
})