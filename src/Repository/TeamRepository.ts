import { EntityRepository, Repository } from 'typeorm'
import { Team } from '../models/Team'

@EntityRepository(Team)
class TeamRepository extends Repository<Team> { } export { TeamRepository }