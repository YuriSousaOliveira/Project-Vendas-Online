import { CityEntity } from '../entities/city.entity';

export class ReturnCityDto {
  name: string;

  constructor(address: CityEntity) {
    this.name = address.name;
  }
}
