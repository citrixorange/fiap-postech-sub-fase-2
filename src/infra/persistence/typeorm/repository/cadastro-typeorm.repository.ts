import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import Cadastro from '@/core/domain/entities/cadastro'
import BusinessException from '@/core/domain/errors/business-exception'
import CadastroMapper from '@/core/domain/mappers/cadastro.mapper'
import ICadastroRepository from '@/core/domain/repositories/icadastro.repository'
import { Cadastro as Entity } from '@/infra/persistence/typeorm/entities/cadastro'

@Injectable()
export default class CadastroTypeormRepository implements ICadastroRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: Cadastro): Promise<Cadastro> {
    const cadastro = CadastroMapper.toDto(input)

    await this.repository.insert(cadastro)

    return input
  }

  async findById (id: string): Promise<Cadastro | undefined> {
    const cadastro = await this.repository.findOneBy({
      id
    })

    return cadastro ? CadastroMapper.toDomainEntity(cadastro) : undefined
  }

  async save (input: Cadastro): Promise<Cadastro> {
    const cadastro = await this.findById(input.id)
    if (!cadastro) {
      throw new BusinessException('Cadastro não encontrado')
    }

    await this.repository.update(cadastro.id, CadastroMapper.toDto(input))

    return cadastro
  }

  async find (): Promise<Cadastro[]> {

    const cadastros = await this.repository
      .createQueryBuilder('cadastro')
      .where("cadastro.vendido = :vendido", { vendido: false })
      .orderBy('cadastro.preco', 'ASC')
      .getMany()

    return cadastros.map(CadastroMapper.toDomainEntity)
  }
  
}
