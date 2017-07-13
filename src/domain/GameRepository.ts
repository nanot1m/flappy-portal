import { IGameRepository } from './IGameRepository'
import { IBullet } from './Bullet/IBullet'
import { IEnemy } from './Enemy/IEnemy'
import { IPlayer } from './Player/IPlayer'
import { Settings } from '../application/Settings'

export class GameRepository implements IGameRepository {
  constructor(
    public settings: Settings,
    public player: IPlayer,
    public enemies: IEnemy[] = [],
    public playerBullets: IBullet[] = [],
    public enemyBullets: IBullet[] = []
  ) {}
}
