import { EntityRepository, Repository } from 'typeorm'
import { Convit } from '../models/Convit';

@EntityRepository(Convit)
class ConvitRepository extends Repository<Convit> { } export { ConvitRepository }