"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteService = void 0;
const typeorm_1 = require("typeorm");
const TesteRepository_1 = require("../Repository/TesteRepository");
class TesteService {
    async execute({ nome }) {
        const testerepository = (0, typeorm_1.getCustomRepository)(TesteRepository_1.TesteRepository);
        const createTeste = testerepository.create({ nome });
        await testerepository.save(createTeste);
    }
}
exports.TesteService = TesteService;
//# sourceMappingURL=TesteService.js.map