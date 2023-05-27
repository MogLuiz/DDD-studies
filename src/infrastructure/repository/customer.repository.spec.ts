import { Sequelize } from "sequelize-typescript";
import { CustomerModel } from "../db/sequelize/model/customer.model";
import { CustomerRepository } from "./customer.repository";
import { Customer } from "../../domain/entity/customer";
import { Address } from "../../domain/entity/address";

describe("Customer repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able create a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.address = address;
    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
    });
  });

  it("should be able to update a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.address = address;
    await customerRepository.create(customer);

    customer.changeName("Customer 2");
    customer.deactivate();
    customer.changeAddress(new Address("Street 2", 2, "Zipcode 2", "City 2"));
    await customerRepository.update(customer);

    const customerModel = await CustomerModel.findOne({
      where: { id: customer.id },
    });

    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: customer.address.street,
      number: customer.address.number,
      zipcode: customer.address.zip,
      city: customer.address.city,
    });
  });

  it("should be able to find a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.address = address;
    await customerRepository.create(customer);

    const customerFound = await customerRepository.find(customer.id);

    expect(customerFound).toStrictEqual(customer);
  });

  it("should throw an error when customer not found", async () => {
    const customerRepository = new CustomerRepository();

    await expect(customerRepository.find("123")).rejects.toThrow(
      "Customer not found"
    );
  });

  it("should be able to find all customers", async () => {
    const customerRepository = new CustomerRepository();
    const customer1 = new Customer("123", "Customer 1");
    const address1 = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer1.address = address1;
    await customerRepository.create(customer1);

    const customer2 = new Customer("456", "Customer 2");
    const address2 = new Address("Street 2", 2, "Zipcode 2", "City 2");
    customer2.address = address2;
    await customerRepository.create(customer2);

    const customersFound = await customerRepository.findAll();

    expect(customersFound).toStrictEqual([customer1, customer2]);
  });
});
