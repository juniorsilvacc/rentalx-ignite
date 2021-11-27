import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
  findOpenRentalByUser(user_id: string): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
  create({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    throw new Error("Method not implemented.");
  }
}

export { RentalsRepository };
