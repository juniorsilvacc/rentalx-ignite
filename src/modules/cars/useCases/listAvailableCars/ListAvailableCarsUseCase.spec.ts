import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;

let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car Description",
      deily_rate: 800,
      license_plate: "Car License Plate",
      fine_amount: 200,
      brand: "Car_Brand_Test",
      category_id: "Car Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_Test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car_Name_Test",
      description: "Car Description",
      deily_rate: 800,
      license_plate: "Car License Plate",
      fine_amount: 200,
      brand: "Car Brand",
      category_id: "Car Category ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car_Name_Test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car Description",
      deily_rate: 800,
      license_plate: "Car License Plate",
      fine_amount: 200,
      brand: "Car Brand 3",
      category_id: "Car_Category_ID",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Car_Category_ID",
    });

    expect(cars).toEqual([car]);
  });
});
