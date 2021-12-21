import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;

  description: string;

  deily_rate: number;

  license_plate: string;

  fine_amount: number;

  brand: string;

  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,

    description,

    deily_rate,

    license_plate,

    fine_amount,

    brand,

    category_id,
  }: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLincensePlate(
      license_plate
    );

    if (carAlreadyExists) {
      throw new AppError("Lincese plate already exists!");
    }

    const car = await this.carsRepository.create({
      name,

      description,

      deily_rate,

      license_plate,

      fine_amount,

      brand,

      category_id,
    });

    return car;
  }
}

export { CreateCarUseCase };
