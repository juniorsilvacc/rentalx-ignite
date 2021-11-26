import { Rental } from "@modules/rentals/infra/entities/Rental";

import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const rentals = this.rentals.find(
      (rental) => rental.car_id === car_id && rental.end_data === null
    );
    return rentals;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const rentals = this.rentals.find(
      (rental) => rental.user_id === user_id && rental.end_data === null
    );
    return rentals;
  }
}

export { RentalsRepositoryInMemory };
