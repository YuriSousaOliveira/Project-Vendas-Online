import { StateEntity } from '../entities/state.entity';

export class ReturnStateDto {
  name: string;

  constructor(address: StateEntity) {
    this.name = address.name;
  }
}
