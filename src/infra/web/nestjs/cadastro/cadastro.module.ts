
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ICadastroRepository } from '@/core/domain/repositories/icadastro.repository'
import { Cadastro } from '@/infra/persistence/typeorm/entities/cadastro'
import CadastroTypeormRepository from '@/infra/persistence/typeorm/repository/cadastro-typeorm.repository'
import CadastrosController from '@/infra/web/nestjs/cadastro/cadastro.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cadastro
    ]),
  ],
  providers: [
    { provide: ICadastroRepository, useClass: CadastroTypeormRepository },
  ],
  controllers: [
    CadastrosController
  ],
  exports: [
    ICadastroRepository
  ]
})
export default class CadastrosModule {}
