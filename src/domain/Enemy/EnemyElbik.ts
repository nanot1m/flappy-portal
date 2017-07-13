import { IEnemy } from './IEnemy'
import { IMovement } from '../IMovement'
import { ElbikView } from '../../view/ElbikView'
import { GameObject } from '../GameObject'

export class EnemyElbik extends GameObject implements IEnemy{
  move: IMovement

  render(): JSX.Element {
    return ElbikView(this.position, this.rotation, this.settings)
  }

}