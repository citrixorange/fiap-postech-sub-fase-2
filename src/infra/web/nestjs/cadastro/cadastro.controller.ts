import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Param,
    Post,
    Put
} from '@nestjs/common'

import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'

import Repository, { ICadastroRepository } from '@/core/domain/repositories/icadastro.repository'
import { CadastroController } from '@/core/operation/controllers/cadastro.controller'
import UpdateCadastroRequest from '@/infra/web/nestjs/cadastro/dto/update-cadastro.request'

import CadastroResponse from './dto/cadastro-response'
import CreateCadastroRequest from './dto/create-cadastro.request'

@Controller('v1/cadastros')
@ApiTags('v1/cadastros')
export default class CadastrosController {
    constructor (
        @Inject(ICadastroRepository) private readonly repository: Repository,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Listar todos os Cadastros' })
    @ApiOkResponse({ description: 'Todos os Cadastro', type: [CadastroResponse], isArray: true })
    list (): Promise<CadastroResponse[]> {
        const controller = new CadastroController(this.repository)
        return controller.list()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar um novo Cadastro' })
    @ApiBody({ type: CreateCadastroRequest })
    @ApiCreatedResponse({ description: 'Registro criado', type: CadastroResponse })
    create (
        @Body() input: CreateCadastroRequest
    ): Promise<CadastroResponse> {
        const controller = new CadastroController(this.repository)

        return controller.create(input)
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um Cadastro' })
    @ApiParam({ name: 'id', required: true, example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805' })
    @ApiBody({ type: UpdateCadastroRequest })
    @ApiOkResponse({ description: 'O registro atualizado', type: CadastroResponse })
    update (
        @Param('id') id: string,
        @Body() input: UpdateCadastroRequest
    ): Promise<CadastroResponse> {
        const controller = new CadastroController(this.repository)

        return controller.update({ ...input, id })
    }

}

