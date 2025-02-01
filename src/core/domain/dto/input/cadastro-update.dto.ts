import CadastroCreateDto from './cadastro-create.dto'

export default interface CadastroUpdateDto extends CadastroCreateDto {
  readonly id: string;
}
