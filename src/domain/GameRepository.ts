import { IGameRepository } from './IGameRepository'
import { IBullet } from './IBullet'
import { IEnemy } from './IEnemy'

export class GameRepository implements IGameRepository {
  player: { rotation: number; position: [number, number] } = {
    rotation: 0,
    position: [0, 0]
  }
  enemies: IEnemy[] = []
  playerBullets: IBullet[] = []
  enemyBullets: IBullet[] = []
}
