import { CorVeiculoEnum } from '@/core/domain/enums/cor'
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca'
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo'

export default interface CadastroDto {
    readonly id: string;
    readonly modelo: ModeloVeiculoEnum;
    readonly marca: MarcaVeiculoEnum;
    readonly ano: string;
    readonly cor: CorVeiculoEnum;
    readonly preco: number;
    readonly vendido: boolean;
}