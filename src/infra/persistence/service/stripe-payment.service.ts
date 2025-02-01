import { Injectable } from '@nestjs/common'

import { v4 as uuidv4 } from 'uuid'

import Venda from '@/core/domain/entities/venda'
import IPagamentoService from '@/core/domain/services/ipagamento.service'

@Injectable()
export default class StripePagamentoService implements IPagamentoService {
  constructor (
  ) {}

  async registerOrder (pedido: Venda): Promise<string> {
    console.log(`Mocked Stripe API: Register order for pedido ${pedido.id}`)
    const gatewayPagamentoId = uuidv4() // mocked ID
    console.log(`Gateway Pagamento ID: ${gatewayPagamentoId}`)
    return gatewayPagamentoId
  }
}
