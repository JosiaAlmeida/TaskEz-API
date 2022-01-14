"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteController = void 0;
const TesteService_1 = require("../Service/TesteService");
class TesteController {
    async handle(req, res) {
        const { nome } = req.body;
        const testeService = new TesteService_1.TesteService();
        const service = await testeService.execute(nome);
        res.status(201).json(service);
    }
}
exports.TesteController = TesteController;
//# sourceMappingURL=TesteController.js.map