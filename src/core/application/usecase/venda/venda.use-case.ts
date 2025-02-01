import VendaCreateDto from '@/core/domain/dto/input/venda-create.dto'
import Venda from '@/core/domain/entities/venda'
import BusinessException from '@/core/domain/errors/business-exception'
import { VendaGateway } from '@/core/operation/gateway/vendas.gateway'
import { CadastroGateway } from '@/core/operation/gateway/cadastro.gateway'
import IVendaUseCase from './ivenda.use-case'

export default class CadastroUseCase implements IVendaUseCase {
  constructor (
    private readonly cadastroGateway: CadastroGateway,
    private readonly vendaGateway: VendaGateway,
  ) {}

  async create (input: VendaCreateDto): Promise<Venda> {

    let cadastro = await this.cadastroGateway.findById(input.cadastroId);

    if (!cadastro) {
        throw new BusinessException('Cadastro não encontrado');
    }

    const venda = Venda.create(
        cadastro,
        input.cpf,
        input.data
    );

    await this.vendaGateway.create(venda);

    return venda;
  }

  async list (): Promise<Venda[]> {
    const vendas = await this.vendaGateway.find();

    return vendas.map((venda) => venda)
  }

}
