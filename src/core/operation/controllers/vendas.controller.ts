import VendaUseCase from '@/core/application/usecase/venda/venda.use-case'
import ProcessPayment from '@/core/application/usecase/venda/payment.use-case'
import VendaCreateDto from '@/core/domain/dto/input/venda-create.dto'
import VendaDto from '@/core/domain/dto/output/venda.dto'
import VendaMapper from '@/core/domain/mappers/vendas.mapper'
import IVendaRepository from '@/core/domain/repositories/ivendas.repository'
import ICadastroRepository from '@/core/domain/repositories/icadastro.repository'
import { VendaGateway } from '@/core/operation/gateway/vendas.gateway'
import { CadastroGateway } from '@/core/operation/gateway/cadastro.gateway'

export class VendaController {
  constructor (
    private readonly cadastroRepository: ICadastroRepository,
    private readonly vendaRepository: IVendaRepository
  ) {}

  async create (
    input: VendaCreateDto
  ): Promise<VendaDto> {

    const useCase = new VendaUseCase(
        new CadastroGateway(this.cadastroRepository),
        new VendaGateway(this.vendaRepository)
    );

    const venda = await useCase.create(input);

    return VendaMapper.toDto(venda);
  }

  async list (): Promise<VendaDto[]> {
    
    const useCase = new VendaUseCase(
        new CadastroGateway(this.cadastroRepository),
        new VendaGateway(this.vendaRepository)
    );

    const vendas = await useCase.list()
    
    return vendas.map((venda) => VendaMapper.toDto(venda));
  }

  async updatePayment (
    id: string,
    paymentApproved: boolean
  ): Promise<VendaDto> {
    const useCase = new ProcessPayment(
      new CadastroGateway(this.cadastroRepository),
      new VendaGateway(this.vendaRepository)
    );

    const venda = await useCase.handle(id, paymentApproved)

    return VendaMapper.toDto(venda)
  }
}