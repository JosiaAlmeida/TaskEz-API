import { getCustomRepository } from 'typeorm'
import { NotifyRepository } from '../Repository/NotifyRepository'
import { UserRepository } from '../Repository/UserRepository'

interface INotify {
    user_id: string
    user_receiver_id: string
    message: string
    status?: string
}

class NotifyService {
    async handlList() {
        const repository = getCustomRepository(NotifyRepository)
        const findMesseger = await repository.find()
        return findMesseger
    }
    async handleFind(id: string) {
        const repository = getCustomRepository(NotifyRepository)
        const findMesseger = await repository.findOneOrFail(id)
        return findMesseger
    }
    async handleCreate({ user_id, user_receiver_id, message, status }: INotify) {
        const repository = getCustomRepository(NotifyRepository)
        const userRepository = getCustomRepository(UserRepository)
        const findMesseger = await repository.find()
        const findUserSend = await userRepository.findOneOrFail(user_id)

        const verifyTotalMessageSenderToUser = findMesseger.filter(user => user.user_id == user_id)

        let total = 1
        if (!findUserSend) return "Precisa ser um usuario para enviar mensagem"
        if (findMesseger) total = verifyTotalMessageSenderToUser.length + 1
        const creadMessage = repository.create({ user_id, user_receiver_id, message, status, total })

        const nome = findUserSend.nome
        await repository.save(creadMessage)
        return { nome, creadMessage }
    }
    async searchMessage(message: string) {
        const repository = getCustomRepository(NotifyRepository)
        const findMesseger = await repository.find()
        const Search = findMesseger.filter(Notify => Notify.message.toLowerCase().includes(message.toLowerCase()))

        if (!Search) return "Nao encontramos essa mensagem"
        return Search
    }
    async execute_delete(id: string) {
        const repository = getCustomRepository(NotifyRepository)
        await repository.delete(id)
    }
} export { NotifyService }