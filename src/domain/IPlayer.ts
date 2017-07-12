import { IPositionCoordinates } from './IPositionCoordinates'

export interface IPlayer {
  rotation: number // надо решить хранить в градусах или радианах,
  position: IPositionCoordinates // нужен будет если мы захотим двигаться
}