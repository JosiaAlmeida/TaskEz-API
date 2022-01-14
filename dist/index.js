"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("./database");
const app = (0, express_1.default)();
const TesteRouter_1 = require("./route/TesteRouter");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
    res.send("API funcionando");
});
app.use("/teste", TesteRouter_1.routerTeste);
app.listen(3002, () => {
    console.log("Rodando na porta localhost:3002");
});
//# sourceMappingURL=index.js.map