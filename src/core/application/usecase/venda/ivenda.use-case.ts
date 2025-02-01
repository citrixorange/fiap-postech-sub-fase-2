import VendaCreateDto from '@/core/domain/dto/input/venda-create.dto'
import Venda from '@/core/domain/entities/venda'

export default interface IVendaUseCase {
  list(): Promise<Venda[]>;
  create(input: VendaCreateDto): Promise<Venda>;
}

export const IVendaUseCase = Symbol('IVendaUseCase')
