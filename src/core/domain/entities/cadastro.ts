import { v4 as uuidv4 } from 'uuid'

import { CorVeiculoEnum } from '@/core/domain/enums/cor'
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca'
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo'
import CadastroUpdateDto from '@/core/domain/dto/input/cadastro-update.dto'

export default class Cadastro {

    readonly id: string;
    modelo: ModeloVeiculoEnum;
    cor: CorVeiculoEnum;
    marca: MarcaVeiculoEnum;
    ano: string;
    preco: number;
    vendido: boolean;

    public constructor(params: Partial<Cadastro>) {
        Object.assign(this, params)
    }

    static create(
        modelo: ModeloVeiculoEnum,
        cor: CorVeiculoEnum,
        marca: MarcaVeiculoEnum,
        ano: string,
        preco: number
    ): Cadastro {
        const id = uuidv4();
        return new Cadastro({id, modelo, cor, marca, ano, preco, vendido: false});
    }

    update(input: CadastroUpdateDto) {
        this.modelo = input.modelo;
        this.cor = input.cor;
        this.marca = input.marca;
        this.ano = input.ano;
        this.preco = input.preco;
    }

    vendaConfirmada () {
        this.vendido = true;
    }
}