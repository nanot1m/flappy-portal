// Почему TypeScript?
// А чтобы ты открыл проект в WebStorm или VSCode
// и у тебя все красиво было
// и всякие автокомплиты работали
// и рефакторинги

import './extensions'
import { renderTick } from './render'
import { run } from './game'
import { HEIGHT, WIDTH } from './constants'

const root = document.createElement('div')
Object.assign(root.style, {
  width: WIDTH + 'px',
  height: HEIGHT + 'px',
  margin: '50px auto'
})
document.body.appendChild(root)

run(renderTick(root), root)
