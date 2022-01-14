"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTeste = void 0;
const express_1 = require("express");
const TesteController_1 = require("../Controller/TesteController");
const routerTeste = (0, express_1.Router)();
exports.routerTeste = routerTeste;
const controller = new TesteController_1.TesteController();
routerTeste.post("/", controller.handle);
//# sourceMappingURL=TesteRouter.js.map