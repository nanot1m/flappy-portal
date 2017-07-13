import { IMovement } from '../IMovement'
import { IPositionCoordinates } from '../IPositionCoordinates'
import { IGameObject } from '../IGameObject'

export interface IEnemy extends IGameObject {
  // тут думаю может нужна функция которая отвечает
  // не только за движени, а вообще за поведение врага,
  // например стрельбу
  move: IMovement
}