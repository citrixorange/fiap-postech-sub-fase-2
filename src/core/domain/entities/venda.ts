import { v4 as uuidv4 } from 'uuid'
import Cadastro from '@/core/domain/entities/cadastro'
import Cpf from '@/core/domain/value-object/Cpf'

export default class Venda {

    readonly id: string;
    readonly cadastroId: string
    readonly cadastro: Cadastro
    readonly cpf: Cpf;
    readonly data: Date;

    public constructor(params: Partial<Venda>) {
        Object.assign(this, params)
    }

    static create(
        cadastro: Cadastro,
        cpf: string,
        data: Date
    ): Venda {
        const id = uuidv4();
        return new Venda({
            id, 
            cadastroId: cadastro?.id, 
            cadastro, 
            cpf: new Cpf(cpf), 
            data
        });
    }

}