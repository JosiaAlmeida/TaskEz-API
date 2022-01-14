import { Request, Response } from 'express'
import { UserService } from '../Service/UserService'

const service = new UserService()
class UserController {
    async handleCreate(req: Request, res: Response) {
        const { nome, numero, password, proficao, status, email } = req.body

        const create = await service.createUser({ nome, numero, password, proficao, status, email })
        res.status(201).json(create)
    }
    async handleSign(req: Request, res: Response) {
        const { email, password } = req.body

        const sign = await service.signUser({ email, password })

        res.status(200).json(sign)
    }
    async handleFindAll(req: Request, res: Response) {
        const findAlluser = await service.FindAllUser()

        res.status(200).json({ findAlluser })
    }
} export { UserController }