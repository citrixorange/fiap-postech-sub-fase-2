import { CorVeiculoEnum } from '@/core/domain/enums/cor'
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca'
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo'

export default interface CadastroCreateDto {
    readonly modelo: ModeloVeiculoEnum;
    readonly marca: MarcaVeiculoEnum;
    readonly ano: string;
    readonly cor: CorVeiculoEnum;
    readonly preco: number;
}