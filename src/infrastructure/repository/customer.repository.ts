import { Customer } from "../../domain/entity/customer";
import { ICustomerRepository } from "../../domain/repository/customer-repository.interface";
import { CustomerModel } from "../db/sequelize/model/customer.model";

export class CustomerRepository implements ICustomerRepository {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: true,
      rewardPoints: entity.rewardPoints,
    });
  }
  update(entity: Customer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Customer[]> {
    throw new Error("Method not implemented.");
  }
}