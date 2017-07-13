import { h } from 'preact'
import { IGameRepository } from '../domain/IGameRepository'

export const GameView = ({enemies, player, settings}: IGameRepository) => console.log(settings) ||
  h(
    'div',
    {
      style: `
        position: relative;
        width: ${settings.width}px;
        height: ${settings.height}px;
        background: #fafafa;
        box-shadow: 0 1px 3px rgba(0,0,0, 0.3);
        cursor: crosshair;
      `
    },
    player.render(),
    enemies.map(x => x.render())
  )