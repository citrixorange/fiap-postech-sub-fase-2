import Venda from '@/core/domain/entities/venda'

export default interface IPagamentoService {
  registerOrder(venda
    : Venda): Promise<string>;
}

export const IPagamentoService = Symbol('IPagamentoService')