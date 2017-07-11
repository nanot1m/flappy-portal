import { WIDTH, HEIGHT } from './constants'
import { h, render } from 'preact'

const board = (...children: (JSX.Element | JSX.Element[] | string)[]) =>
  h(
    'div',
    {
      style: `
        position: relative;
        width: 100%;
        height: 100%;
        background: #fafafa;
        box-shadow: 0 1px 3px rgba(0,0,0, 0.3);
        cursor: crosshair;
      `
    },
    ...children
  )

const logo = (top: number, left: number, rotation: number) =>
  h('div', {
    style: `
      background-image: url('/images/portal-logo.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      width: 40px;
      height: 40px;
      top: ${HEIGHT - top - 20}px;
      left: ${left - 20}px;
      transform: rotate(${rotation - 65}deg);
      user-select: none;
    `
  })

const game = (rotation: number) => board(logo(50, WIDTH / 2, rotation))

let prevTree: Element
export const renderTick = (root: HTMLElement) => (rotation: number) => {
  prevTree = render(game(rotation), root, prevTree)
}
