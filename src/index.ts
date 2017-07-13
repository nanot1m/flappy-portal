// Почему TypeScript?
// А чтобы ты открыл проект в WebStorm или VSCode
// и у тебя все красиво было
// и всякие автокомплиты работали
// и рефакторинги
import {render} from 'preact'
import './infrastructure/extensions'
import { GameRepository } from './domain/GameRepository'
import { Settings } from './application/Settings'
import { Player } from './domain/Player/Player'
import { EnemyElbik } from './domain/Enemy/EnemyElbik'
import { AppStart } from './application/AppStart'

const domNode = document.createElement('div')
document.body.appendChild(domNode)

let lastTree: Element;
const graphics = (view: JSX.Element) => {
  lastTree = render(view, domNode, lastTree)
}

const settings = new Settings()

const player = new Player(settings)
player.position = [settings.width / 2, 50]


const enemies = Array.from(
  { length: 20},
  () => new EnemyElbik(
    settings,
    [
      Math.random() * (settings.width - 50) + 50,
      (1 - Math.random() * 0.5) * settings.height - 50
    ],
    Math.random() * 180
  )
)

const gameRepository = new GameRepository(
  settings,
  player,
  enemies
)

const app = new AppStart(
  gameRepository,
  graphics
)

app.render()
