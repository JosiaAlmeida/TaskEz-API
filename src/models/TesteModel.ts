import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('test')
export class TesteModel {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string

    constructor() {
        if (!this.id) this.id = uuid()
    }

}
