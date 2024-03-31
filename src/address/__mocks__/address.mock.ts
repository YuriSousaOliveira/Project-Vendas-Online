import { cityEntityMock } from '../../city/__mocks__/city.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressEntityMock: AddressEntity = {
  cep: '43253252',
  cityId: cityEntityMock.id,
  complement: 'llkdfja',
  id: 57546,
  numberAddress: 654,
  created_at: new Date(),
  updated_at: new Date(),
  userId: userEntityMock.id,
};
