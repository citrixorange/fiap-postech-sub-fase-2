import Venda from '@/core/domain/entities/venda'
import Repository from '@/core/domain/repositories/ivendas.repository'
import Cpf from '@/core/domain/value-object/Cpf'

export class VendaGateway {
  constructor (private repository: Repository) {
  }

  findByCpf (cpf: Cpf): Promise<Venda | undefined> {
    const produto = this.repository.findByCpf(cpf)
    return produto
  }

  findById (id: string): Promise<Venda | undefined> {
    const produto = this.repository.findById(id)
    return produto
  }

  create (input: Venda): Promise<Venda> {
    return this.repository.create(input)
  }

  save (input: Venda): Promise<Venda> {
    return this.repository.save(input)
  }

  find (): Promise<Venda[]> {
    return this.repository.find()
  }
}
