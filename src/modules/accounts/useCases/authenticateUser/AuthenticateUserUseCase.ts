import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;

  password: string;
}

interface IResponse {
  user: {
    name: string;

    email: string;
  };

  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Verificar se usuário existe

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect");
    }

    // Verificar se a senha está correta

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }

    // Gerar o token

    const token = sign({}, "01d94b9cca210de5c8d3fdc2d5da8c6d", {
      subject: user.id,

      expiresIn: "1d",
    });

    // Retorno

    const tokenReturn: IResponse = {
      token,

      user: {
        name: user.name,

        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
