import { ApiProperty } from '@nestjs/swagger'

import { CorVeiculoEnum } from '@/core/domain/enums/cor'
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca'
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo'
import CadastroUpdateDto from '@/core/domain/dto/input/cadastro-update.dto'

export default class UpdateCadastroRequest implements CadastroUpdateDto {
  @ApiProperty({ description: 'ID no formato uuid', example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805' })
  readonly id: string

  @ApiProperty({ description: 'Modelo', enum: ModeloVeiculoEnum, example: ModeloVeiculoEnum.HATCH })
  readonly modelo: ModeloVeiculoEnum

  @ApiProperty({ description: 'Marca', enum: MarcaVeiculoEnum, example: MarcaVeiculoEnum.FIAT })
  readonly marca: MarcaVeiculoEnum

  @ApiProperty({ description: 'Ano', example: '2021/2022' })
  readonly ano: string

  @ApiProperty({ description: 'Cor', enum: CorVeiculoEnum, example: CorVeiculoEnum.METALIZADO })
  readonly cor: CorVeiculoEnum

  @ApiProperty({ description: 'Preço', example: '70000' })
  readonly preco: number


}
