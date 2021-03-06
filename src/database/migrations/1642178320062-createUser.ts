import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1642178320062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "numero",
                    type: "number"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "proficao",
                    type: "varchar"
                },
                {
                    name: "status",
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
