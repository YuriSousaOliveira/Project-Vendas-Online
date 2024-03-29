import { Body, Controller, Get, Post } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';
import { CreateStateDto } from './dtos/createState.dto';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllStates(): Promise<StateEntity[]> {
    return this.stateService.getAllStates();
  }

  @Post()
  async createState(@Body() createState: CreateStateDto): Promise<StateEntity> {
    return this.stateService.createState(createState);
  }
}
