import { IMovement } from './IMovement'
import { IPositionCoordinates } from './IPositionCoordinates'

export interface IEnemy {
  id: string
  position: IPositionCoordinates
  rotation: number

  // тут думаю может нужна функция которая отвечает
  // не только за движени, а вообще за поведение врага,
  // например стрельбу
  move: IMovement
}