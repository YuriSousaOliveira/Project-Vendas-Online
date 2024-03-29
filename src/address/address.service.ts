import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }

  async getAllAddress(): Promise<AddressEntity[]> {
    return this.addressRepository.find();
  }
}
