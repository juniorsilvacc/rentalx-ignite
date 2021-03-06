import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create({
    id,
    name,
    email,
    password,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<void>;

  findByEmail(email: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository };
