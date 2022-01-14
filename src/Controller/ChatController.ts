import { Request, Response } from 'express'
import { ChatService } from '../Service/ChatService'

const service = new ChatService()

class ChatController {
    async execute(req: Request, res: Response) {
        const { user_id, user_receiver_id, message, status } = req.body
        const sendMessage = await service.handleCreate({ user_id, user_receiver_id, message, status })
        return res.status(201).json({ sendMessage })
    }
} export { ChatController }