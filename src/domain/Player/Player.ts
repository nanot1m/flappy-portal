import { PlayerView } from '../../view/PlayerView'
import { GameObject } from '../GameObject'

export class Player extends GameObject{
  render(): JSX.Element {
    return PlayerView(this.position, this.rotation, this.settings)
  }
}