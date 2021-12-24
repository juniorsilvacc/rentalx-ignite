import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const rentals = this.rentals.find(
      (rental) => rental.car_id === car_id && !rental.end_date
    );

    return rentals;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const rentals = this.rentals.find(
      (rental) => rental.user_id === user_id && !rental.end_date
    );

    return rentals;
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      car_id,
      expected_return_date,
      user_id,
      start_date: new Date(),
    });

    this.rentals.push(rental);

    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rentalId = this.rentals.find((rental) => rental.id === id);

    return rentalId;
  }

  async findByUserId(user_id: string): Promise<Rental[]> {
    const rentalUser = this.rentals.filter(
      (rental) => rental.user_id === user_id
    );

    return rentalUser;
  }
}

export { RentalsRepositoryInMemory };
