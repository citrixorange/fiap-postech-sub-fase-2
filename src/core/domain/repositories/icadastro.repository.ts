import Cadastro from '@/core/domain/entities/cadastro'

export default interface ICadastroRepository {
  create(input: Cadastro): Promise<Cadastro>;
  findById(id: string): Promise<Cadastro | undefined>;
  save(input: Cadastro): Promise<Cadastro>;
  find(): Promise<Cadastro[]>;
}

export const ICadastroRepository = Symbol('ICadastroRepository')