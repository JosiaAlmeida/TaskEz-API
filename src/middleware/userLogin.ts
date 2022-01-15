import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { UserRepository } from '../Repository/UserRepository'
import { getCustomRepository } from 'typeorm'

export default async function userLogin(req: Request, res: Response, next: NextFunction) {
    const Headertoken = req.headers.authorization
    if (!Headertoken) {
        return res.status(401).json({ message: "Nao autorizado" })
    }
    const [_, token] = Headertoken.split(' ')
    const verifyToken = verify(token, process.env.JWT_TOKEN)
    if (!verifyToken) return res.status(401).json({ message: "Nao autorizado" })
    const user = getCustomRepository(UserRepository)
    const email = verifyToken.sub
    const findUser = await user.findOne({ email })
    req.user_id = findUser.id
    req.user_name = findUser.nome
    next()
}