import { getCustomRepository } from 'typeorm'
import { ConvitRepository } from '../Repository/ConvitRepository'
import { ProjectRepository } from '../Repository/ProjectRepository'
import { UserRepository } from '../Repository/UserRepository'
import { TaskRepository } from '../Repository/TaskRepository'
import { TeamRepository } from '../Repository/TeamRepository'
import { NotifyService } from './NotifyService'


const notifyService = new NotifyService()
class ActionUserService {
    constructor() {
    }
    async execute_add_notify(user_id: string, user_receiver_id: string) {
        const convitRepository = getCustomRepository(ConvitRepository)
        const teamRepository = getCustomRepository(TeamRepository)
        const userRepository = getCustomRepository(UserRepository)
        let message: string
        return message
    }
    async execute_add_notify_project(user_id: string, user_receiver_id: string) {
        const Projectrepository = getCustomRepository(ProjectRepository)

        const lastAddProject = await Projectrepository.find()
        let message: string
        if (Date.parse(lastAddProject[lastAddProject.length - 1].updated_at.toString())
            == Date.parse(lastAddProject[lastAddProject.length - 1].created_up.toString()))
            message = "Novo projecto foi adicionado: " + lastAddProject[lastAddProject.length - 1].title.toString()
        await notifyService.handleCreate({ user_id, user_receiver_id, message })

        const dateNow = Date.now()
        lastAddProject.map(({ updated_at }, i) => Date.parse(updated_at.toString())
            == dateNow ? message = "Projecto atualizado: " + lastAddProject[i].title : '')

        await notifyService.handleCreate({ user_id, user_receiver_id, message })
        return message
    }
    async execute_add_notify_Task(user_id: string, user_receiver_id: string) {
        const taskRepository = getCustomRepository(TaskRepository)

        const lastAddProject = await taskRepository.find()
        let message: string
        if (Date.parse(lastAddProject[lastAddProject.length - 1].updated_at.toString())
            == Date.parse(lastAddProject[lastAddProject.length - 1].created_up.toString()))
            message = "Novo projecto foi adicionado: " + lastAddProject[lastAddProject.length - 1].title.toString()
        await notifyService.handleCreate({ user_id, user_receiver_id, message })

        const dateNow = Date.now()
        lastAddProject.map(({ updated_at }, i) => Date.parse(updated_at.toString())
            == dateNow ? message = "Projecto atualizado: " + lastAddProject[i].title : '')

        await notifyService.handleCreate({ user_id, user_receiver_id, message })
        return message
    }
    async execute_add_notify_project(user_id: string, user_receiver_id: string) {
        const Projectrepository = getCustomRepository(ProjectRepository)

        const lastAddProject = await Projectrepository.find()
        let message: string
        if (Date.parse(lastAddProject[lastAddProject.length - 1].updated_at.toString())
            == Date.parse(lastAddProject[lastAddProject.length - 1].created_up.toString()))
            message = "Novo projecto foi adicionado: " + lastAddProject[lastAddProject.length - 1].title.toString()
        await notifyService.handleCreate({ user_id, user_receiver_id, message })

        const dateNow = Date.now()
        lastAddProject.map(({ updated_at }, i) => Date.parse(updated_at.toString())
            == dateNow ? message = "Projecto atualizado: " + lastAddProject[i].title : '')

        await notifyService.handleCreate({ user_id, user_receiver_id, message })
        return message
    }
    async execute_add_notify_project(user_id: string, user_receiver_id: string) {
        const Projectrepository = getCustomRepository(ProjectRepository)

        const lastAddProject = await Projectrepository.find()
        let message: string
        if (Date.parse(lastAddProject[lastAddProject.length - 1].updated_at.toString())
            == Date.parse(lastAddProject[lastAddProject.length - 1].created_up.toString()))
            message = "Novo projecto foi adicionado: " + lastAddProject[lastAddProject.length - 1].title.toString()
        await notifyService.handleCreate({ user_id, user_receiver_id, message })

        const dateNow = Date.now()
        lastAddProject.map(({ updated_at }, i) => Date.parse(updated_at.toString())
            == dateNow ? message = "Projecto atualizado: " + lastAddProject[i].title : '')

        await notifyService.handleCreate({ user_id, user_receiver_id, message })
        return message
    }
} export { ActionUserService }