import express, { NextFunction, Request, Response } from 'express';
import "reflect-metadata";
import './database/'
import 'dotenv/config'
import { routerTeste } from './route/TesteRouter';
import { routeUser } from './route/UserRouter';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("TaskEz")
})

app.use("/teste", routerTeste)
app.use('/user', routeUser)

app.listen(3002, () => {
    console.log("Rodando na porta 3002")
})
