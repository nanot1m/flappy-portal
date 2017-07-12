import { h } from 'preact'
import { IEnemy } from '../domain/IEnemy'
import { Settings } from '../application/Settings'

const WIDTH = 40
const HEIGHT = 40

const INITIAL_ROTATION = 0

export const EnemyView = (
  {position: [left, top], rotation}: IEnemy,
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