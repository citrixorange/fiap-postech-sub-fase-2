import CadastroCreateDto from '@/core/domain/dto/input/cadastro-create.dto'
import CadastroUpdateDto from '@/core/domain/dto/input/cadastro-update.dto'
import Cadastro from '@/core/domain/entities/cadastro'

export default interface ICadastroUseCase {
  list(): Promise<Cadastro[]>;
  create(input: CadastroCreateDto): Promise<Cadastro>;
  update(input: CadastroUpdateDto): Promise<Cadastro>;
}

export const ICadastroUseCase = Symbol('ICadastroUseCase')
