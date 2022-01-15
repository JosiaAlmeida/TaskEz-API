import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('tasks')
class Task {

    @PrimaryColumn()
    id: string

    @Column()
    user_id: string
    @JoinColumn({ name: "user_id" })
    userId: string

    @Column()
    project_id: string
    @JoinColumn({ name: "project_id" })
    projectId: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: Boolean

    @Column()
    point: number

    @CreateDateColumn()
    created_up: Date

    @UpdateDateColumn()
    updated_at: Date


    constructor() {
        if (!this.id) this.id = uuid();
        if (!this.point) this.point = 0
        if (!this.status) this.status = false
    }
} export { Task }