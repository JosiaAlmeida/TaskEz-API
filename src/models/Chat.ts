import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('chat')
class Chat {
    @PrimaryColumn()
    id: string

    @Column()
    user_id: string

    @Column()
    user_receiver_id: string

    @JoinColumn({ name: "user_id" })
    userId: User

    @JoinColumn({ name: "user_receiver_id" })
    userReceiverId: User

    @Column()
    message: string

    @Column()
    status: string
    @Column()
    total: number
    @CreateDateColumn()
    created_up: Date
    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
} export { Chat }