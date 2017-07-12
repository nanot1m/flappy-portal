// Общее состояние игры
// Объект такого типа должен принимать
// графический движок (функция рендер)
// и наш физический движок (функция handleGameTick)
type GameState = {
  player: {
    rotation: number // надо решить хранить в градусах или радианах,
    position: PositionCoordinates // нужен будет если мы захотим двигаться
  }
  aliveEnemies: string[] // набор ID врагов
  enemies: { [id: string]: IEnemy } // описание врагов
  bullets: IBullet[] // массив дружественных снарядов
  enemyBullets: IBullet[] // массив вражеских снарядов
}

type PositionCoordinates = [number, number]

// функция описывающая траекторию движения
// принимает время, и возвращает позицию относительно
// точки [0, 0] и угол поворота
// например (t) => ({ position: [WIDTH / 2, 2 * t], rotation: 0 })
type Movement = (
  time: number
) => {
  position: PositionCoordinates
  rotation: number
}

interface IEnemy {
  id: string
  position: PositionCoordinates
  rotation: number

  // тут думаю может нужна функция которая отвечает
  // не только за движени, а вообще за поведение врага,
  // например стрельбу
  move: Movement
}

interface IBullet {
  startPoint: PositionCoordinates

  // может задавать различные траектории движения снарядов
  move: Movement
}
