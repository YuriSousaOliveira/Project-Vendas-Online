import { userEntityMock } from '../../user/__mocks__/user.mock';
import { LoginDto } from '../dtos/login.dto';

export const loginUserEntityMock: LoginDto = {
  email: userEntityMock.email,
  password: 'abc',
};
