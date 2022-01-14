"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: 'mongodb',
    url: 'mongodb+srv://root:root@cluster0.3vkb9.mongodb.net/taskez'
}).then(() => console.log("Conectado a DB"))
    .catch(error => console.log("falha ", error));
//# sourceMappingURL=index.js.map