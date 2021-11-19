import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

class IUsersRepository {
  create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
