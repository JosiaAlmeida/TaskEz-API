import { getCustomRepository } from "typeorm";
import { TesteRepository } from "../Repository/TesteRepository";

interface ITesteService {
    nome: string
}

class TesteService {
    async execute(nome: string) {
        const testerepository = getCustomRepository(TesteRepository)

        const createTeste = testerepository.create({ nome })

        await testerepository.save(createTeste)
        return createTeste
    }
} export { TesteService }