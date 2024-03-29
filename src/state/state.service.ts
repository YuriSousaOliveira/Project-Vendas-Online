import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dtos/createState.dto';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) {}

  async createState(createStateDto: CreateStateDto): Promise<StateEntity> {
    return this.stateRepository.save(createStateDto);
  }

  async getAllStates(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }
}
