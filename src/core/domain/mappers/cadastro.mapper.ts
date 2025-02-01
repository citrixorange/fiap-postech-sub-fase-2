import CadastroDto from '@/core/domain/dto/output/cadastro.dto'
import Cadastro from '@/core/domain/entities/cadastro'

export default class CadastroMapper {
  static toDto (cadastro: Cadastro): CadastroDto {
    return {
      ...cadastro
    }
  }

  static toDomainEntity (input: CadastroDto): Cadastro {
    return new Cadastro({
        id: input.id, 
        modelo: input.modelo, 
        cor: input.cor, 
        marca: input.marca, 
        ano: input.ano, 
        preco: input.preco
    })
  }
}
