import CadastroCreateDto from '@/core/domain/dto/input/cadastro-create.dto'
import CadastroUpdateDto from '@/core/domain/dto/input/cadastro-update.dto'
import Cadastro from '@/core/domain/entities/cadastro'
import BusinessException from '@/core/domain/errors/business-exception'
import { CadastroGateway } from '@/core/operation/gateway/cadastro.gateway'

import ICadastroUseCase from './icadastro.use-case'

export default class CadastroUseCase implements ICadastroUseCase {
  constructor (
    private readonly gateway: CadastroGateway,
  ) {}

  async create (input: CadastroCreateDto): Promise<Cadastro> {
    
    const cadastro = Cadastro.create(
      input.modelo,
      input.cor,
      input.marca,
      input.ano,
      input.preco
    );

    await this.gateway.create(cadastro);

    return cadastro;
  }

  async update (
    input: CadastroUpdateDto,
  ): Promise<Cadastro> {

    const cadastro = await this.gateway.findById(input.id);

    if (!cadastro) {
      throw new BusinessException('Cadastro não encontrado');
    }

    cadastro.update(input);

    await this.gateway.save(cadastro);

    return cadastro;
  }

  async list (): Promise<Cadastro[]> {
    const cadastros = await this.gateway.find();

    return cadastros.map((cadastro) => cadastro)
  }

}
