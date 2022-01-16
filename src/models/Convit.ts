import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";

@Entity('convit')
class Convit {
    @PrimaryColumn()
    id: string

    @Column()
    user_id: string

    @JoinColumn({ name: 'user_id' })
    userId: User

    @Column()
    user_receiver_id: string

    @JoinColumn({ name: 'user_receiver_id' })
    userReceiverId: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: string

    @Column()
    expired: Date

    @Column()
    total: number

    @CreateDateColumn()
    created_up: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }

} export { Convit }