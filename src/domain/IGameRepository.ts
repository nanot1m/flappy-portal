// Общее состояние игры
// Объект такого типа должен принимать
// графический движок (функция рендер)
// и наш физический движок (функция handleGameTick)
import { IEnemy } from './IEnemy'
import { IBullet } from './IBullet'
import { IPlayer } from './IPlayer'

export interface IGameRepository {
  player: IPlayer
  enemies: IEnemy[] // описание врагов
  playerBullets: IBullet[] // массив дружественных снарядов
  enemyBullets: IBullet[] // массив вражеских снарядов
}

