import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('projects')
class Project {
    @PrimaryColumn()
    id: string

    @Column()
    user_id: string

    @JoinColumn({ name: "user_id" })
    userId: User

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: number

    @Column()
    point: number

    @CreateDateColumn()
    created_up: Date
    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
} export { Project }