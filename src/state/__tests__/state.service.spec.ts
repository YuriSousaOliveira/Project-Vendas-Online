import { Test, TestingModule } from '@nestjs/testing';
import { StateService } from '../state.service';
import { Repository } from 'typeorm';
import { StateEntity } from '../entities/state.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { stateEntityMock } from '../__mocks__/state.mock';
import { createStateMock } from '../__mocks__/createState.mock';

describe('StateService', () => {
  let service: StateService;
  let stateRepository: Repository<StateEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StateService,
        {
          provide: getRepositoryToken(StateEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([stateEntityMock]),
            save: jest.fn().mockResolvedValue(stateEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<StateService>(StateService);
    stateRepository = module.get<Repository<StateEntity>>(
      getRepositoryToken(StateEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(stateRepository).toBeDefined();
  });

  it('should return all states in getAllStates', async () => {
    const state = await service.getAllStates();
    expect(state).toEqual([stateEntityMock]);
  });

  it('should return error in getAllStates (error request)', async () => {
    jest.spyOn(stateRepository, 'find').mockRejectedValueOnce(new Error());
    expect(service.getAllStates()).rejects.toThrowError();
  });

  it('should return state create', async () => {
    const state = await service.createState(createStateMock);
    expect(state).toEqual(stateEntityMock);
  });
});
