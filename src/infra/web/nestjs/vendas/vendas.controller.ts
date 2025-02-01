import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Post
} from '@nestjs/common'

import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import IVendaRepository, { IVendaRepository as IVendaRepositorySymbol } from '@/core/domain/repositories/ivendas.repository'
import ICadastroRepository, { ICadastroRepository as ICadastroRepositorySymbol } from '@/core/domain/repositories/icadastro.repository'
import { VendaController } from '@/core/operation/controllers/vendas.controller'

import VendaResponse from './dto/venda-response'
import CreateVendaRequest from './dto/create-venda.request'

@Controller('v1/vendas')
@ApiTags('v1/vendas')
export default class VendasController {
    constructor (
        @Inject(IVendaRepositorySymbol) private readonly vendaRepository: IVendaRepository,
        @Inject(ICadastroRepositorySymbol) private readonly cadastroRepository: ICadastroRepository
    ) {}

    @Get()
    @ApiOperation({ summary: 'Listar todas as Vendas' })
    @ApiOkResponse({ description: 'Todas os Venda', type: [VendaResponse], isArray: true })
    list (): Promise<VendaResponse[]> {
        const controller = new VendaController(this.cadastroRepository, this.vendaRepository);
        return controller.list()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar um novo Venda' })
    @ApiBody({ type: CreateVendaRequest })
    @ApiCreatedResponse({ description: 'Registro criado', type: VendaResponse })
    create (
        @Body() input: CreateVendaRequest
    ): Promise<VendaResponse> {
        const controller = new VendaController(this.cadastroRepository, this.vendaRepository);

        return controller.create(input)
    }

}

