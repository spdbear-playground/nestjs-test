import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get('')
  public getCars() {
    return this.carService.getCars();
  }

  @Post('')
  public postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  public getCarById(@Param('id') id: number) {
    return this.carService.getCarById(id);
  }

  @Delete(':id')
  public deleteCarById(@Param('id') id: number) {
    return this.carService.deleteCarById(id);
  }

  @Put('')
  public putCarById(@Param('id') id: number, @Query() query) {
    const name = query.property_name;
    const value = query.property_value;
    return this.carService.putCarById(id, name, value);
  }
}
