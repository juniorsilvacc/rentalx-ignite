import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car Description",
      deily_rate: 800,
      license_plate: "Car License Plate",
      fine_amount: 200,
      brand: "Car Brand",
      category_id: "Car Category ID",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by Brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car Description",
      deily_rate: 800,
      license_plate: "Car License Plate",
      fine_amount: 200,
      brand: "Car_Brand_Test",
      category_id: "Car Category ID",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_Brand_Test",
    });

    expect(cars).toEqual([car]);
  });
});
