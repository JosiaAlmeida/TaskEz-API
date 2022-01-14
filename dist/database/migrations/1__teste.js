"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateProfile1600016576988 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "test",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "nome",
                    type: "varchar(200)"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("test");
    }
}
exports.default = CreateProfile1600016576988;
//# sourceMappingURL=1__teste.js.map