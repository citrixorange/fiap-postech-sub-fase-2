import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager'
import { Global, Inject, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Cache } from 'cache-manager'
import * as redisStore from 'cache-manager-redis-store'

import RedisConfig from '@/config/RedisConfig'
import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'
import AppCache from '@/core/helpers/AppCache'
import AppController from '@/infra/web/nestjs/app.controller'
import CadastroModule from '@/infra/web/nestjs/cadastro/cadastro.module'
import VendaModule from '@/infra/web/nestjs/vendas/vendas.module'

export const appModules = [
  CadastroModule,
  VendaModule
];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    CacheModule.register({
      store: redisStore,
      ...RedisConfig
    }),

    ...appModules
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppCache
  ],
  exports: [
    AppCache
  ]
})
export default class AppModule {
  constructor (@Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  async onApplicationShutdown () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (this.cacheManager as any).store.getClient().quit()
  }
}
