import { IGameRepository } from '../domain/IGameRepository'
import { GameView } from '../view/GameView'

export class AppStart {
  constructor(
    private repository: IGameRepository,
    private graphics: (view: JSX.Element) => void
  ) {}

  render() {
    console.log(this.repository)
    this.graphics(GameView(this.repository))
  }
}