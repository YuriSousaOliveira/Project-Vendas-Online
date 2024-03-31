import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12312321',
  created_at: new Date(),
  email: 'mock@gmail.com',
  id: 4343,
  name: 'Mock Oliveira',
  password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
  phone: '21312321',
  typeUser: UserType.User,
  updated_at: new Date(),
  addresses: [],
};
