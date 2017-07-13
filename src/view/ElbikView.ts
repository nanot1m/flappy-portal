import { h } from 'preact'
import { IGameObject } from '../domain/IGameObject'
import { Settings } from '../application/Settings'
import { IPositionCoordinates } from '../domain/IPositionCoordinates'

const HEIGHT = 40
const WIDTH = 40
const INITIAL_ROTATION = 0

export const ElbikView = ([x, y]: IPositionCoordinates, rotation: number, settings: Settings) =>
  h('div', {
    style: `
      background-image: url('/images/elbik.svg');
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