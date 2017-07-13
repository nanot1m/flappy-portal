import { IPositionCoordinates } from '../IPositionCoordinates'
import { IMovement } from '../IMovement'
import { IGameObject } from '../IGameObject'

export interface IBullet extends IGameObject {
  // может задавать различные траектории движения снарядов
  move: IMovement
}
