import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { LoginPayloadDto } from '../auth/dtos/loginPayload.dto';
import { ReturnAddressDto } from './dtos/returnAddress.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() user: LoginPayloadDto,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, user?.id);
  }

  @Get('user')
  async findAddressByUserId(
    @UserId() user: LoginPayloadDto,
  ): Promise<ReturnAddressDto[]> {
    return (await this.addressService.findAddressByUserId(user?.id)).map(
      (address) => new ReturnAddressDto(address),
    );
  }

  @Get()
  async getAllAddress(): Promise<AddressEntity[]> {
    return this.addressService.getAllAddress();
  }
}
