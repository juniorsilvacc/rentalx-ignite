import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;

let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const cars = {
      name: "Name Car",

      description: "Description Car",

      deily_rate: 200,

      license_plate: "ABC-1234",

      fine_amount: 100,

      brand: "Brand",

      category_id: "Category",
    };

    await createCarUseCase.execute({
      name: cars.name,

      description: cars.description,

      deily_rate: cars.deily_rate,

      license_plate: cars.license_plate,

      fine_amount: cars.fine_amount,

      brand: cars.brand,

      category_id: cars.category_id,
    });

    const carCreated = await carsRepositoryInMemory.findByLincensePlate(
      cars.license_plate
    );

    expect(carCreated).toHaveProperty("id");
  });

  it("should not be able to create a car with exists lincense plate.", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",

        description: "Description Car",

        deily_rate: 200,

        license_plate: "ABC-1234",

        fine_amount: 100,

        brand: "Brand",

        category_id: "Category",
      });

      await createCarUseCase.execute({
        name: "Car2",

        description: "Description Car",

        deily_rate: 200,

        license_plate: "ABC-1234",

        fine_amount: 100,

        brand: "Brand",

        category_id: "Category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car available true by default.", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",

      description: "Description Car",

      deily_rate: 200,

      license_plate: "ABD-1234",

      fine_amount: 100,

      brand: "Brand",

      category_id: "Category",
    });

    expect(car.available).toBe(true);
  });
});
