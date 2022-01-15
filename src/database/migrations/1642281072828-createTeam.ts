import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTeam1642281072828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Team",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "project_id",
                    type: "uuid"
                },
                {
                    name: "user_receiver_id",
                    type: "uuid"
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "member",
                    type: "varchar"
                },
                {
                    name: "created_up",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKUsers",
                    referencedTableName: "users",
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKUserreceiver",
                    referencedTableName: "users",
                    referencedColumnNames: ['id'],
                    columnNames: ['user_receiver_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKProject",
                    referencedTableName: "projects",
                    referencedColumnNames: ['id'],
                    columnNames: ['project_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
