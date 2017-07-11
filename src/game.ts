import { WIDTH, HEIGHT } from './constants'
import { animationFrame } from 'rxjs/scheduler/animationFrame'
import { Observable } from 'rxjs/Observable'

// Знак $ - обозначает поток.
// interval создает поток событий с заданным интервалом.
// тут интервал установлен равный нулю,
// но чтобы обеспечить плавную картинку
// ставим scheduler (менеджер очереди) — animationFrame.
// animationFrame говорит что следующее событие может быть выброшено
// только когда текущий кадр отрисовался.
// затем регистрируем каждое событие мы мапим в время его эмита.
// в итоге получаем поток времен в миллисекундах
const time$ = Observable.interval(0, animationFrame).map(Date.now)

// Теперь поток time$ хотим превравить в поток разности
// времен между последними двумя событиями.
// Метод zip объединяет соответствующие событи в один поток
// применяя функцию трансформации, которая передана вторым аргументом
// skip — возвращает новый поток, который равен текущему,
// но без определенного числа событий
const tick$ = time$.zip(time$.skip(1), (t1, t2) => t2 - t1)

// тут функция которая создаст поток
// нужно было получить поток в котором мы имели бы координаты мышки.
// fromEvent - создает поток который эмитит события от событий с дом-ноды.
// в данном случае мы создали поток от события mousemove с элемента root.
// Далеем для того чтобы получить координаты внутри элемента root
// нам нужно вычесть из clientX/Y (координаты относительно экрана)
// offsetLeft/Top (координаты левого верх угла ноды root)
const createMouseMove$ = (root: HTMLElement) =>
  Observable.fromEvent(root, 'mousemove').map((x: MouseEvent) => ({
    x: x.clientX - root.offsetLeft,
    y: HEIGHT - (x.clientY - root.offsetTop)
  }))

// тут все просто
// переводим координаты в углы относительно нашего логотипчика
// сейчас координаты логотипчика (WIDTH / 2, 50) захардкожены
// в дальнейшем нужно их вынести в конфиг
const createTurn$ = (mouseMove$: Observable<{ x: number; y: number }>) =>
  mouseMove$
    .startWith({ x: 0, y: 0 })
    .map(({ x, y }) => ({ x: WIDTH / 2 - x, y: y - 50 }))
    // Хз почему тут минус, но с ним все работает
    // может тут не тангенс угла нужен?
    .map(({ x, y }) => -Math.atan2(x, y) * 180 / Math.PI)

export const run = (render: (rotation: number) => void, root: HTMLElement) => {
  const turn$ = createTurn$(createMouseMove$(root))
  // withLatestFrom - на каждое событие из tick$ вернет последнее событие из
  // turn$, и применит функцию трансформации, которая передана вторым аргументом
  // При вызове метода subscribe - мы с каждым событием из потока будем вызывать
  // метод render
  // Если subscribe у потока не вызвать, то ничего не произойдет
  // Все потоки ленивые и начинают работать только когда кто-то на них
  // подпишется
  tick$.withLatestFrom(turn$, (_, x) => x).subscribe(render)
}
