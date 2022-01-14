import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../Repository/UserRepository'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { classToPlain } from 'class-transformer'

interface IUser {
    nome: string;
    numero: number;
    password: string;
    proficao: string;
    status: string
    email: string
}

interface ISign {
    email: string
    password: string
}

class UserService {
    async createUser({ nome, numero, password, proficao, status, email }: IUser) {
        const repository = getCustomRepository(UserRepository)

        const pass = await hash(password, 8)

        const userCreate = await repository.create({ nome, numero, email, password: pass, proficao, status })

        const token = sign({ email: email }, process.env.JWT_TOKEN, { subject: email, expiresIn: '1d' })

        await repository.save(userCreate)

        return classToPlain({ userCreate, token })
    }
    async signUser({ email, password }: ISign) {
        const repository = getCustomRepository(UserRepository)
        const findUser = await repository.findOne({ email })

        if (!findUser) return "Usuario inexiste/Senha incorreta"

        const verifyPass = await compare(password, findUser.password)

        if (verifyPass) {
            const token = sign({ email }, process.env.JWT_TOKEN, { subject: email, expiresIn: '1d' })
            return classToPlain({ findUser, token })
        }
        // if(findUser.password)
        else return "Usuario inexiste/Senha incorreta"
    }
    async FindAllUser() {
        const repository = getCustomRepository(UserRepository)
        const AllUser = await repository.find()

        return classToPlain(AllUser)
    }
} export { UserService }