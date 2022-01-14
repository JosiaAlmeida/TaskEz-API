import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createChat1642180008726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "chat",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "user_receiver_id",
                    type: "uuid"
                },
                {
                    name: "message",
                    type: "varchar"
                },
                {
                    name: "status",
                    type: "varchar"
                },
                {
                    name: "total",
                    type: "number"
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
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chat")
    }

}
