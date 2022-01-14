import { Repository, EntityRepository } from 'typeorm'
import { Teste } from '../models/Teste'


@EntityRepository(Teste)
class TesteRepository extends Repository<Teste>{ } export { TesteRepository }