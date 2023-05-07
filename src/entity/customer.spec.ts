import { Address } from "./address"
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

    it("should change name", () => {
      const newName = "John"
      const customer = new Customer("123", "any")

      customer.changeName(newName)

       expect(customer.getName()).toBe(newName)
    })

    it("should activate customer", () => {
      const customer = new Customer("123", "customer 1",)
      const address = new Address("Street 1", 1243, "12343-124", "Beagá")
      customer.addAddress(address)

      customer.activate()

       expect(customer.isActive()).toBe(true)
    })
    
})