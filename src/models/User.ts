import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Exclude } from 'class-transformer';

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    numero: number

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string

    @Column()
    proficao: string

    @Column()
    status: string

    @CreateDateColumn()
    created_up: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }


} export { User }