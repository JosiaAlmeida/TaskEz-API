import { Request, Response } from 'express'
import { ChatService } from '../Service/ChatService'

const service = new ChatService()

class ChatController {
    async execut_list(req: Request, res: Response) {
        const notify = await service.handlList()
        return res.status(200).json(notify)
    }
    async execut_find(req: Request, res: Response) {
        const { id } = req.params
        const notify = await service.handleFind(id)
        return res.status(200).json(notify)
    }
    async execute(req: Request, res: Response) {
        const { user_receiver_id, message, status } = req.body
        const user_id = req.user_id
        const sendMessage = await service.handleCreate({ user_id, user_receiver_id, message, status })
        return res.status(201).json({ sendMessage })
    }
    async search(req: Request, res: Response) {
        const { message } = req.body
        const Search = await service.searchMessage(message)

        return res.status(200).json(Search)
    }
} export { ChatController }