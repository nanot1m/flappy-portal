import { IPositionCoordinates } from './IPositionCoordinates'
import { Settings } from '../application/Settings'

export interface IGameObject {
  id: number
  position: IPositionCoordinates
  rotation: number
  render(): JSX.Element
}