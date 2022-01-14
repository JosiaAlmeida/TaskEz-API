import { Repository, EntityRepository } from 'typeorm'
import { Chat } from '../models/Chat'


@EntityRepository(Chat)
class ChatRepository extends Repository<Chat>{ } export { ChatRepository }