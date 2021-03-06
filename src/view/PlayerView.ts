import { h } from 'preact'
import { Settings } from '../application/Settings'
import { IPositionCoordinates } from '../domain/IPositionCoordinates'

const HEIGHT = 40
const WIDTH = 40

// рисует логотип в нужном месте с нужным углом поворота
// картинка изначально немного повернута
// экспериментальным путем выяснил, что этот поворот равен 65 градусам
const INITIAL_ROTATION = 65

export const PlayerView = (
  [x, y]: IPositionCoordinates,
  rotation: number,
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
      top: ${settings.height - y - HEIGHT / 2}px;
      left: ${x - WIDTH / 2}px;
      transform: rotate(${rotation - INITIAL_ROTATION}deg);
      user-select: none;
    `
  })