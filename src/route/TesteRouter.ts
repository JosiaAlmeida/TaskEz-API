import { Router } from 'express'
import { TesteController } from '../Controller/TesteController'

const routerTeste = Router()
const controller = new TesteController()

// routerTeste.get("/", )

routerTeste.post("/", controller.handle)


export { routerTeste }