import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../models/User'

interface IPoint {
    id?: string
    status: string | number | Boolean
    Point?: number
}

class GenericService<E>{
    constructor(private repo) { }
    async execute_list() {
        const repository = getCustomRepository(this.repo) as Repository<E>
        const Findall = await repository.find()

        return Findall
    }
    async execute_find_id(id: string) {
        const repository = getCustomRepository(this.repo) as Repository<E>
        const Find = await repository.findOne(id)
        if (!Find) return "Não encontrado"
        return Find
    }
    async execute_create(t: E) {
        const repository = getCustomRepository(this.repo) as Repository<E>
        const createService = repository.create(t)
        await repository.save(createService)
        return createService
    }
    async execute_update(id: string, b: E) {
        const repository = getCustomRepository(this.repo) as Repository<E>
        const findToUpdate = await repository.findOne(id)
        if (!findToUpdate) return "Não foi possível encontrar a informação desejada"
        const update = await repository.update(id, b)
        return update
    }
    async execute_delete(id: string) {
        const repository = getCustomRepository(this.repo) as Repository<E>
        await repository.delete(id)
    }
    execute_point({ status }: IPoint) {
        if (status || status == 2 || status == "active") return 10
        else if (status == 1) return 5
        return 0
    }

} export { GenericService }