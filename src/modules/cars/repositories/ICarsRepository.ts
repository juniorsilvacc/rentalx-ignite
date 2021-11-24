import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface ICarsRepository {
  create({
    name,
    description,
    deily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car>;

  findByLincensePlate(license_plate: string): Promise<Car>;

  findAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Car[]>;

  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
