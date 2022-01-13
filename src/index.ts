import express, { Request, Response, NextFunction } from 'express'

const app = express()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("API funcionando")
})


app.listen(3000, () => {
    console.log("Rodando na porta localhost:3000")
})