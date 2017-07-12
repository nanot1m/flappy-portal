import { IPlayer } from '../domain/IPlayer'
import { h } from 'preact'
import { Settings } from '../application/Settings'

const HEIGHT = 40
const WIDTH = 40

// рисует логотип в нужном месте с нужным углом поворота
// картинка изначально немного повернута
// экспериментальным путем выяснил, что этот поворот равен 65 градусам
const INITIAL_ROTATION = 65

export const PlayerView = (
  { position: [left, top], rotation }: IPlayer,
  settings: Settings
) =>
  h('div', {
    style: `
      background-image: url('/images/player.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      width: ${WIDTH}px;
      height: ${HEIGHT}px;
      top: ${settings.height - top - HEIGHT / 2}px;
      left: ${left - WIDTH / 2}px;
      transform: rotate(${rotation - INITIAL_ROTATION}deg);
      user-select: none;
    `
  })