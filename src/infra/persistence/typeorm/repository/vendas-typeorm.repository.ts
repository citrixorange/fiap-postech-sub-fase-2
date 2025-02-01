import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'
import Cpf from '@/core/domain/value-object/Cpf'
import BusinessException from '@/core/domain/errors/business-exception'
import VendaDto from '@/core/domain/dto/output/venda.dto'
import Venda from '@/core/domain/entities/venda'
import VendaMapper from '@/core/domain/mappers/vendas.mapper'
import IVendaRepository from '@/core/domain/repositories/ivendas.repository'
import { Venda as Entity } from '@/infra/persistence/typeorm/entities/venda'

@Injectable()
export default class VendaTypeormRepository implements IVendaRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: Venda): Promise<Venda> {

    let venda = VendaMapper.toDto(input);

    venda = await this.repository.save(venda);

    return VendaMapper.toDomainEntity(venda as VendaDto);
  }

  async save (input: Venda): Promise<Venda> {

    const venda = await this.findById(input.id)

    if (!venda) {
      throw new BusinessException('Venda não encontrada')
    }

    await this.repository.update(venda.id, VendaMapper.toDto(input))

    return venda
  }

  async findById(id: string): Promise<Venda | undefined> {

    const venda = await this.repository
      .createQueryBuilder('venda')
      .leftJoinAndSelect('venda.cadastro', 'cadastro')
      .where('pedido.id = :id', { id })
      .getOne()

    return venda ? VendaMapper.toDomainEntity(venda) : undefined
  }

  async findByCpf(cpf: Cpf): Promise<Venda | undefined> {
    const venda = await this.repository.findOneBy({
      cpf: cpf.getValue()
    })

    return venda ? VendaMapper.toDomainEntity(venda) : undefined
  }

  async find(): Promise<Venda[]> {
    const vendas = await this.repository
      .createQueryBuilder('venda')
      .leftJoinAndSelect('venda.consumidor', 'consumidor')
      .orderBy('consumidor.preco', 'ASC')
      .getMany()

    return vendas.map(VendaMapper.toDomainEntity)
  }
}
