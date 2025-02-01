/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
import dotenv from 'dotenv'
dotenv.config()

import { Environment as envs } from '@/infra/web/nestjs/environment'
envs.validate()

import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import * as bodyParser from 'body-parser'
import helmet from 'helmet'

import AppModule from '@/infra/web/nestjs/app.module'
import ResponseTransformInterceptor from '@/core/helpers/ResponseTransformInterceptor'

const configureSwagger = (app: INestApplication) => {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Fiap Car Store API')
    .setDescription('Fiap Car Store API documentation')
    .setVersion('0.0.1')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('docs', app, document)
}

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  
  configureSwagger(app)

  app.use(helmet())

  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  app.enableCors({ optionsSuccessStatus: 200 })
  app.enableShutdownHooks()
  app.useGlobalInterceptors(new ResponseTransformInterceptor())
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(envs.PORT, () => {
    console.log(`Listening at ${envs.PORT}`)
  })
}

bootstrap().catch((err) => {
  console.error(err)
})
