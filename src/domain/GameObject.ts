import { IGameObject } from './IGameObject'
import { IPositionCoordinates } from './IPositionCoordinates'
import { Settings } from '../application/Settings'

let GlobalId = 0

export abstract class GameObject implements IGameObject {
  id: number

  constructor(
    protected settings: Settings,
    public position: IPositionCoordinates = [0, 0],
    public rotation: number = 0
  ) {
    this.id = GlobalId++
  }

  abstract render(): JSX.Element
}