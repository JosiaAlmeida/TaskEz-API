import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('test')
class Teste {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string

    constructor() {
        if (!this.id) this.id = uuid()
    }

} export { Teste }