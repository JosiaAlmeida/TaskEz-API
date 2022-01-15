import "reflect-metadata";
import './database/'
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport'
import { routerTeste } from './route/TesteRouter';
import { routeUser } from './route/UserRouter';
import { routeChat } from './route/ChatRouter';
import { routerProject } from "./route/ProjectRouter";
import { routerTask } from "./route/TaskRouter";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("TaskEz")
})

app.use("/teste", routerTeste)
app.use('/user', routeUser)
app.use('/chat', routeChat)
app.use('/project', routerProject)
app.use('/task', routerTask)

app.listen(3002, () => {
    console.log("Rodando na porta 3002")
})
