import VendaDto from '@/core/domain/dto/output/venda.dto'
import Venda from '@/core/domain/entities/venda'
import CadastroMapper from '@/core/domain/mappers/cadastro.mapper'
import Cpf from '@/core/domain/value-object/Cpf'

export default class VendaMapper {
  static toDto (venda: Venda): VendaDto {
    return {
      ...venda,
      cpf: venda.cpf.toString()
    }
  }

  static toDomainEntity (input: VendaDto): Venda {
    return new Venda({
        id: input.id, 
        cadastroId: input.cadastroId,
        cadastro: CadastroMapper.toDomainEntity(input.cadastro),
        cpf: new Cpf(input.cpf),
        data: input.data
    })
  }
}
