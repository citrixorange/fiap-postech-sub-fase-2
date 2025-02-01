import Cadastro from '@/core/domain/entities/cadastro'
import Repository from '@/core/domain/repositories/icadastro.repository'

export class CadastroGateway {
  constructor (private respository: Repository) {
  }

  findById (id: string): Promise<Cadastro | undefined> {
    const cadastro = this.respository.findById(id);
    return cadastro;
  }

  create (input: Cadastro): Promise<Cadastro> {
    return this.respository.create(input);
  }

  save (input: Cadastro): Promise<Cadastro> {
    return this.respository.save(input);
  }

  find (): Promise<Cadastro[]> {
    return this.respository.find();
  }
}
