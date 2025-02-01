import CadastroDto from '@/core/domain/dto/output/cadastro.dto'

export default interface VendaDto {
    readonly id: string;
    readonly cpf: string;
    readonly data: Date;
    readonly cadastroId: string;
    readonly cadastro: CadastroDto;
}