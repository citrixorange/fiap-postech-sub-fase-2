import { ApiProperty } from '@nestjs/swagger'

import CadastroResponse from '@/infra/web/nestjs/cadastro/dto/cadastro-response';
import VendaDto from '@/core/domain/dto/output/venda.dto'

export default class VendaResponse implements VendaDto {
  @ApiProperty({ description: 'ID no formato uuid', example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805' })
  readonly id: string

  @ApiProperty({ description: 'CPF (apenas números)', example: '12345678900' })
  readonly cpf: string

  @ApiProperty({ description: 'Data da Venda', type: Date, example: new Date() })
  readonly data: Date

  @ApiProperty({ description: 'Id do cadastro', example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805' })
  readonly cadastroId: string

  @ApiProperty({ description: 'Cadastro', type: CadastroResponse, required: true })
  readonly cadastro: CadastroResponse

}
