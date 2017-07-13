import { h } from 'preact'
import { IBullet } from '../domain/Bullet/IBullet'
import { Settings } from '../application/Settings'

const WIDTH = 10
const HEIGHT = 20

const INITIAL_ROTATION = 0

export const PlayerBulletView = (
  {position, rotation}: IBullet,
  settings: Settings
) =>
  h('div', {})
