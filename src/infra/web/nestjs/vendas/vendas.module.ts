
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ICadastroRepository } from '@/core/domain/repositories/icadastro.repository'
import { Cadastro } from '@/infra/persistence/typeorm/entities/cadastro'
import CadastroTypeormRepository from '@/infra/persistence/typeorm/repository/cadastro-typeorm.repository'

import { IVendaRepository } from '@/core/domain/repositories/ivendas.repository'
import { Venda } from '@/infra/persistence/typeorm/entities/venda'
import VendaTypeormRepository from '@/infra/persistence/typeorm/repository/vendas-typeorm.repository'
import VendasController from '@/infra/web/nestjs/vendas/vendas.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cadastro,
      Venda
    ]),
  ],
  providers: [
    { provide: ICadastroRepository, useClass: CadastroTypeormRepository },
    { provide: IVendaRepository, useClass: VendaTypeormRepository },
  ],
  controllers: [
    VendasController
  ],
  exports: [
    IVendaRepository
  ]
})
export default class VendasModule {}
