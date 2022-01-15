import { getCustomRepository } from 'typeorm'
import { ProjectRepository } from '../Repository/ProjectRepository'


interface IProject {
    user_id: string
    title: string
    description: string
    status: number
    point: number
}

class ProjectService {
    async create({ user_id, title, description, status, point }: IProject) {
        const repository = getCustomRepository(ProjectRepository)
        const createService = repository.create({ user_id, title, description, status, point })
        await repository.save(createService)
        return createService
    }
} export { ProjectService }