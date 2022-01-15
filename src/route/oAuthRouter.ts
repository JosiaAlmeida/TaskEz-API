import { Router } from 'express'
const oAuthRouter = Router()

oAuthRouter.get('/oAuth/sign/google')

export { oAuthRouter }