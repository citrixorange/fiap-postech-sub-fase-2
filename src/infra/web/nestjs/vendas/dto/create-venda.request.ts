import { ApiProperty } from '@nestjs/swagger'

import VendaCreateDto from '@/core/domain/dto/input/venda-create.dto'

export default class CreateVendaRequest implements VendaCreateDto {

    @ApiProperty({ description: 'Id do cadastro', example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805' })
    readonly cadastroId: string
  
    @ApiProperty({ description: 'CPF (apenas números)', example: '12345678900' })
    readonly cpf: string
  
    @ApiProperty({ description: 'Data da Venda', type: Date, example: new Date() })
    readonly data: Date
  
}
