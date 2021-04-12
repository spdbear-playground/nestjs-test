import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
  private cars = CARS;
  public getCars() {
    return this.cars;
  }

  public postCar(car: {
    id: number;
    brand: string;
    color: string;
    model: string;
  }) {
    return this.cars.push(car);
  }
  public getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new HttpException('NOT FOUND', 404);
    }
    return car;
  }
  public deleteCarById(id: number) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new HttpException('NOT FOUND', 404);
    }
    this.cars.splice(carIndex, 1);
    return this.cars;
  }
  public putCarById(id: number, propertyName: string, propertyValue: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1) {
      throw new HttpException('NOT FOUND', 404);
    }
    this.cars[carIndex][propertyName] = propertyValue;
    return;
  }
}
