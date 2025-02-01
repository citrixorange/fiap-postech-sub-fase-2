import CadastroUseCase from '@/core/application/usecase/cadastro/cadastro.use-case'
import CadastroCreateDto from '@/core/domain/dto/input/cadastro-create.dto'
import CadastroUpdateDto from '@/core/domain/dto/input/cadastro-update.dto'
import CadastroDto from '@/core/domain/dto/output/cadastro.dto'
import CadastroMapper from '@/core/domain/mappers/cadastro.mapper'
import ICadastroRepository from '@/core/domain/repositories/icadastro.repository'
import { CadastroGateway } from '@/core/operation/gateway/cadastro.gateway'

export class CadastroController {
  constructor (
   private readonly cadastroRepository: ICadastroRepository,
  ) {}

  async create (
    input: CadastroCreateDto
  ): Promise<CadastroDto> {

    const useCase = new CadastroUseCase(
      new CadastroGateway(this.cadastroRepository),
    );

    const cadastro = await useCase.create(input);

    return CadastroMapper.toDto(cadastro);
  }

  async update (
    input: CadastroUpdateDto
  ): Promise<CadastroDto> {
    const useCase = new CadastroUseCase(new CadastroGateway(this.cadastroRepository));

    const cadastro = await useCase.update(input);

    return CadastroMapper.toDto(cadastro);
  }

  async list (): Promise<CadastroDto[]> {
    const useCase = new CadastroUseCase(new CadastroGateway(this.cadastroRepository));

    const cadastros = await useCase.list()

    return cadastros.map((cadastro) => CadastroMapper.toDto(cadastro));
  }

}
