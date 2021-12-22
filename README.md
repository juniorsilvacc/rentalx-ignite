# Cadastro de carro

**RF**

- Deve ser possível cadastrar um carro.

**RN**

- Não deve ser possível cadastrar um carro com a placa já existente.
- O carro deve ser cadastrado como disponibilidade por padrão.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todas os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todas os carros disponíveis pelo nome da marca.
- Deve ser possível listar todas os carros disponíveis pelo nome do carro.

**RN**

- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem do carro

**RF**

- Deve ser possível cadastrar a imagem do carro.

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

**RNF**

- Utilizar o multer para upload dos arquivos.

# Aluguel de carro

**RF**

- Deve ser possível cadastrar um aluguel.

**RNF**

- O aluguel deve ter duração mínima de 24hora.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve está logado na aplicação.
- Ao realizar o aluguel o status deverá ser alterado para indisponível.

# Devolução de carro

**RF**

- Deve ser possível realizar a devolução de um carro

**RN**

- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entre, devéra ser cobrado multa proporcionou aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
