import { IPositionCoordinates } from './IPositionCoordinates'
import { IMovement } from './IMovement'

export interface IBullet {
  // может задавать различные траектории движения снарядов
  move: IMovement

  position: IPositionCoordinates

  rotation: number
}