import { UserEntity } from '../../user/entities/user.entity';

export class LoginPayloadDto {
  id: number;
  name: string;
  typeUser: number;
  cpf: string;
  phone: string;
  email: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.typeUser = user.typeUser;
    this.cpf = user.cpf;
    this.phone = user.phone;
    this.email = user.email;
  }
}
