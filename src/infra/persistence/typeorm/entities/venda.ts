import { Column, PrimaryColumn, CreateDateColumn, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Cadastro } from './cadastro'

@Entity('Venda')
export class Venda {
  constructor (params?: Partial<Venda>) {
    Object.assign(this, params)
  }

  @PrimaryColumn({ length: 36 })
  public readonly id: string

  @Column({ name: 'cadastro_id', length: 36, nullable: true })
  public cadastroId: string

  @ManyToOne(() => Cadastro, cadastro => cadastro.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cadastro_id' })
  public cadastro: Cadastro

  @Column()
  public cpf: string

  @CreateDateColumn({ name: 'data' })
  public data: Date
}
