import Venda from '@/core/domain/entities/venda'
import Cpf from '@/core/domain/value-object/Cpf'

export default interface IVendaRepository {
  create(input: Venda): Promise<Venda>;
  save(input: Venda): Promise<Venda>;
  findById(id: string): Promise<Venda | undefined>;
  findByCpf(cpf: Cpf): Promise<Venda | undefined>;
  find(): Promise<Venda[]>;
}

export const IVendaRepository = Symbol('IVendaRepository')