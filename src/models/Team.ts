import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('Team')
class Team {
    @PrimaryColumn()
    id: string

    @Column()
    member: string

    @Column()
    user_id: string

    @JoinColumn({ name: "User_id" })
    userId: string

    @Column()
    user_receiver_id: string

    @JoinColumn({ name: "user_receiver_id" })
    userReceiverId: string

    @Column()
    project_id: string

    @JoinColumn({ name: "project_id" })
    projectId: string

    constructor() {
        if (!this.id) this.id = uuid()
    }

} export { Team }