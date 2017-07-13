// Общее состояние игры
// Объект такого типа должен принимать
// графический движок (функция рендер)
// и наш физический движок (функция handleGameTick)
import { IEnemy } from './Enemy/IEnemy'
import { IBullet } from './Bullet/IBullet'
import { IPlayer } from './Player/IPlayer'
import { Settings } from '../application/Settings'

export interface IGameRepository {
  player: IPlayer
  enemies: IEnemy[] // описание врагов
  playerBullets: IBullet[] // массив дружественных снарядов
  enemyBullets: IBullet[] // массив вражеских снарядов

  settings: Settings
}

