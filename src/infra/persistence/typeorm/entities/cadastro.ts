import { Column, Entity, PrimaryColumn } from 'typeorm'
import { CorVeiculoEnum } from '@/core/domain/enums/cor';
import { MarcaVeiculoEnum } from '@/core/domain/enums/marca';
import { ModeloVeiculoEnum } from '@/core/domain/enums/modelo';

@Entity('Cadastro')
export class Cadastro {
  constructor (params?: Partial<Cadastro>) {
    Object.assign(this, params)
  }

  @PrimaryColumn({ length: 36 })
  public readonly id: string

  @Column({ type: 'varchar', length: 30 })
  modelo: ModeloVeiculoEnum

  @Column({ type: 'varchar', length: 30 })
  cor: CorVeiculoEnum

  @Column({ type: 'varchar', length: 30 })
  marca: MarcaVeiculoEnum

  @Column()
  public ano: string

  @Column()
  public preco: number

  @Column()
  public vendido: boolean
}
