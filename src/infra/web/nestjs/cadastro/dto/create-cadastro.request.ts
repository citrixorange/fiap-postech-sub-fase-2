import { ApiProperty } from '@nestjs/swagger'

import CadastroCreateDto from '@/core/domain/dto/input/cadastro-create.dto'
import { CorVeiculoEnum } from '@/core/domain/enums/cor'
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca'
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo'

export default class CreateCadastroRequest implements CadastroCreateDto {

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
