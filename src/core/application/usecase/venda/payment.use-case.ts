import Venda from '@/core/domain/entities/venda'
import { CadastroGateway } from '@/core/operation/gateway/cadastro.gateway'
import { VendaGateway } from '@/core/operation/gateway/vendas.gateway'

export default class ProcessPayment {
  constructor (
    private readonly cadastroGateway: CadastroGateway,
    private readonly vendaGateway: VendaGateway
  ) {}

  async handle (id: string, paymentApproved: boolean): Promise<Venda> {

    const cadastro = await this.cadastroGateway.findById(id);

    if (!cadastro) {
      throw new Error('Cadastro não encontrado');
    }

    const venda = await this.vendaGateway.findById(id);

    if (!venda) {
      throw new Error('Venda não encontrada');
    }

    if (!paymentApproved) {
      return venda;
    }

    cadastro.vendaConfirmada();

    await this.cadastroGateway.save(cadastro);

    return venda;
  }
}