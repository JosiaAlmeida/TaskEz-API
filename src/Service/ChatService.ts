import { getCustomRepository } from 'typeorm'
import { ChatRepository } from '../Repository/ChatRepository'
import { UserRepository } from '../Repository/UserRepository'

interface IChat {
    user_id: string
    user_receiver_id: string
    message: string
    status: string
}

class ChatService {
    async handleCreate({ user_id, user_receiver_id, message, status }: IChat) {
        const repository = getCustomRepository(ChatRepository)
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
        const repository = getCustomRepository(ChatRepository)
        const findMesseger = await repository.find()
        const Search = findMesseger.filter(chat => chat.message.toLowerCase().includes(message.toLowerCase()))

        if (!Search) return "Nao encontramos essa mensagem"
        return Search
    }
} export { ChatService }