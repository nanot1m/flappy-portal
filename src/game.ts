import { WIDTH, HEIGHT } from './constants'
import { animationFrame } from 'rxjs/scheduler/animationFrame'
import { Observable } from 'rxjs/Observable'

const time$ = Observable.interval(0, animationFrame).map(Date.now)
const tick$ = time$.zip(time$.skip(1), (t1, t2) => t2 - t1)
const createMouseMove$ = (root: HTMLElement) =>
  Observable.fromEvent(root, 'mousemove').map((x: MouseEvent) => ({
    x: x.clientX - root.offsetLeft,
    y: HEIGHT - (x.clientY - root.offsetTop)
  }))

const createTurn$ = (mouseMove$: Observable<{ x: number; y: number }>) =>
  mouseMove$
    .startWith({ x: 0, y: 0 })
    .map(({ x, y }) => ({ x: WIDTH / 2 - x, y: y - 50 }))
    .map(({ x, y }) => -Math.atan2(x, y) * 180 / Math.PI)

export const run = (render: (rotation: number) => void, root: HTMLElement) => {
  const turn$ = createTurn$(createMouseMove$(root))
  tick$.withLatestFrom(turn$, (_, x) => x).subscribe(render)
}
