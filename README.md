# Fiap Car Store API
![typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Node 20.10](https://shields.io/badge/Node-20.10.0-339933?logo=Node.js&logoColor=FFF&style=flat-square)
![nestjs](https://shields.io/badge/NestJS-E0234E?logo=NestJS&logoColor=FFF&style=flat-square)
![mysql](https://shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=FFF&style=flat-square)
![redis](https://shields.io/badge/Redis-DC382D?logo=Redis&logoColor=FFF&style=flat-square)
![docker](https://shields.io/badge/Docker-2496ED?logo=Docker&logoColor=FFF&style=flat-square)
![swagger](https://shields.io/badge/Swagger-85EA2D?logo=Swagger&logoColor=FFF&style=flat-square)
![typeorm](https://shields.io/badge/TypeORM-F37626?logo=TypeORM&logoColor=FFF&style=flat-square)

This project involves the development of an API for a Car Store System, proposed as a Sub Tech Challenge for the Software Architecture Postgraduate Course at FIAP.

For this project, i have utilized [TypeScript](https://www.typescriptlang.org/) as programming language with [Node.js](https://nodejs.org/) and the [Nest.js](https://nestjs.com/) framework. The database management includes [MySQL 5.7](https://www.mysql.com/) to handle information related to Cadastro & Vendas. Additionally, an in-memory [Redis](https://redis.io/) database is employed for caching.

To build the API documentation, i've used [Swagger](https://swagger.io/) tool integrated with Nest.js, accessible through the endpoint: {host}/docs

## Workspace Dependencies
- [Node 20.10](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started/)

## Project Dependencies
Install project dependencies with:
```bash
npm run install
```

## Running Project Locally

```bash
docker-compose up
```

# In Other Terminal Tab execute Database Migration for Database Table Creation

```bash
docker-compose exec service-fiap-car-store-api npm run migration:run
```

## Running Project in a Local Kubernetes Cluster

cd migration
./setup.sh

## Endpoints
We developed few endpoints which can be found in [cadastro.controller.ts](./src/infra/web/nestjs/cadastro/cadastro.controller.ts), [vendas.controller.ts](./src/infra/web/nestjs/vendas/vendas.controller.ts) files.

## Business Requirements:
1. Cadastro do Veículo para Venda
> POST {host}/v1/cadastro
2. Editar os dados do Veículo
> PUT {host}/v1/cadastro
3. Listagem de veículos à venda
> GET {host}/v1/cadastro
4. Efetuar a Venda de um Veículo
> POST {host}/v1/vendas
5. Listagem de Veículos Vendidos
> GET {host}/v1/vendas
6. Webhook de Pagamento (Stripe)
> POST {host}/v1/vendas/pagamento-webhook/stripe
