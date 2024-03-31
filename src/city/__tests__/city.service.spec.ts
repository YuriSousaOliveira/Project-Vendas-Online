import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from '../city.service';
import { Repository } from 'typeorm';
import { CityEntity } from '../entities/city.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { cityEntityMock } from '../__mocks__/city.mock';
import { CacheService } from '../../cache/cache.service';

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([cityEntityMock]),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(cityEntityMock),
            find: jest.fn().mockResolvedValue([cityEntityMock]),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should return cities in getAllCities', async () => {
    const city = await service.getAllCities();
    expect(city).toEqual([cityEntityMock]);
  });

  it('should return city in findCityById', async () => {
    const city = await service.findCityById(cityEntityMock.id);
    expect(city).toEqual(cityEntityMock);
  });

  it('should return error findOne not found', async () => {
    jest.spyOn(cityRepository, 'findOne').mockResolvedValue(undefined);
    expect(service.findCityById(cityEntityMock.id)).rejects.toThrowError();
  });

  it('should return Cities in getCityByState', async () => {
    const city = await service.getCityByState(cityEntityMock.id);
    expect(city).toEqual([cityEntityMock]);
  });
});
