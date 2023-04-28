export class Address {
  constructor(
    private street: string,
    private number: number,
    private zip: string,
    private city: string
  ) {
    this.validate();
  }

  validate() {
    if (this.street.length === 0) {
      throw new Error("Street is required");
    }
    if (this.number === 0) {
      throw new Error("Number is required");
    }
    if (this.zip.length === 0) {
      throw new Error("Zip is required");
    }
    if (this.city.length === 0) {
      throw new Error("City is required");
    }
  }
}
