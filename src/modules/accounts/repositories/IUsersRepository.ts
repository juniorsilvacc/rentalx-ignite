import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

class IUsersRepository {
  create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
