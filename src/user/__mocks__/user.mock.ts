import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12312321',
  created_at: new Date(),
  email: 'mock@gmail.com',
  id: 4343,
  name: 'Mock Oliveira',
  password: 'senhamock',
  phone: '21312321',
  typeUser: UserType.User,
  updated_at: new Date(),
  addresses: [],
};
