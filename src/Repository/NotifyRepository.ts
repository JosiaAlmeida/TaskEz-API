import { EntityRepository, Repository } from 'typeorm'
import { Notify } from '../models/Notify'

@EntityRepository(Notify)
class NotifyRepository extends Repository<Notify> { } export { NotifyRepository }