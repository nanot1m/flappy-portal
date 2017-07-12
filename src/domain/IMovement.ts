import { IPositionCoordinates } from './IPositionCoordinates'

// функция описывающая траекторию движения
// принимает время, и возвращает позицию относительно
// точки [0, 0] и угол поворота
// например (t) => ({ position: [WIDTH / 2, 2 * t], rotation: 0 })
export type IMovement = (
  time: number
) => {
  position: IPositionCoordinates
  rotation: number
}