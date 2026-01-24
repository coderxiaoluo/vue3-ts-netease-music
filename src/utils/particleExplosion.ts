interface DirectiveBinding {
  value?: boolean | { exclude?: string }
}

class Ball {
  x: number
  y: number
  angle: number
  multiplier: number
  vx: number
  vy: number
  r: number
  color: string

  constructor(x: number, y: number, longPressed: boolean, multiplier: number) {
    this.x = x
    this.y = y
    this.angle = Math.PI * 2 * Math.random()

    if (longPressed) {
      this.multiplier = this.randBetween(14 + multiplier, 15 + multiplier)
    } else {
      this.multiplier = this.randBetween(6, 12)
    }

    this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle)
    this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle)
    this.r = this.randBetween(8, 12) + 3 * Math.random()
    this.color = colours[Math.floor(Math.random() * colours.length)]
  }

  randBetween(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min
  }

  update(normal: { x: number; y: number }): void {
    this.x += this.vx - normal.x
    this.y += this.vy - normal.y

    normal.x = (-2 / window.innerWidth) * Math.sin(this.angle)
    normal.y = (-2 / window.innerHeight) * Math.cos(this.angle)

    this.r -= 0.3
    this.vx *= 0.9
    this.vy *= 0.9
  }
}

const colours: string[] = ['#F73859', '#14FFEC', '#00E0FF', '#FF99FE', '#FAF15D']

let canvas: HTMLCanvasElement | null = null
let ctx: CanvasRenderingContext2D | null = null
let balls: Ball[] = []
let longPressed = false
let longPressTimer: number | null = null
let multiplier = 0
let width = 0
let height = 0
let normal = { x: 0, y: 0 }
let animationFrameId: number | null = null

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * max) + min
}

function updateSize(): void {
  if (!canvas || !ctx) return

  canvas.width = window.innerWidth * 2
  canvas.height = window.innerHeight * 2
  canvas.style.width = window.innerWidth + 'px'
  canvas.style.height = window.innerHeight + 'px'

  ctx.scale(2, 2)

  width = window.innerWidth
  height = window.innerHeight
  normal = { x: width / 2, y: height / 2 }
}

function pushBalls(count: number, x: number, y: number): void {
  for (let i = 0; i < count; i++) {
    balls.push(new Ball(x, y, longPressed, multiplier))
  }
}

function removeBall(): void {
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i]
    if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
      balls.splice(i, 1)
      i--
    }
  }
}

function loop(): void {
  if (!ctx || !canvas) return

  ctx.fillStyle = 'rgba(255, 255, 255, 0)'
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < balls.length; i++) {
    const b = balls[i]
    if (b.r < 0) continue

    ctx.fillStyle = b.color
    ctx.beginPath()
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false)
    ctx.fill()
    b.update(normal)
  }

  multiplier -= 0.4
  if (multiplier < 0) multiplier = 0

  removeBall()

  animationFrameId = requestAnimationFrame(loop)
}

function initCanvas(): void {
  if (canvas) return

  canvas = document.createElement('canvas')
  canvas.setAttribute(
    'style',
    'width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;'
  )
  document.body.appendChild(canvas)

  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
    if (ctx) {
      updateSize()
      window.addEventListener('resize', updateSize, false)
      loop()
    }
  }
}

function cleanup(): void {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  balls = []
  longPressed = false
  multiplier = 0
  if (longPressTimer) {
    clearInterval(longPressTimer)
    longPressTimer = null
  }
}

export const particleExplosion = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value === false) {
      return
    }

    initCanvas()

    const mousedownHandler = (e: MouseEvent): void => {
      if (binding.value && typeof binding.value === 'object' && (binding.value as any).exclude) {
        if (e.target.closest((binding.value as any).exclude)) {
          return
        }
      }

      pushBalls(randBetween(10, 20), e.clientX, e.clientY)

      longPressed = false
      multiplier = 0

      if (longPressTimer) {
        clearInterval(longPressTimer)
      }

      longPressTimer = window.setInterval(() => {
        longPressed = true
        multiplier += 0.2
        pushBalls(randBetween(1, 2), e.clientX, e.clientY)
      }, 100)
    }

    const mouseupHandler = (e: MouseEvent): void => {
      if (binding.value && typeof binding.value === 'object' && (binding.value as any).exclude) {
        if (e.target.closest((binding.value as any).exclude)) {
          return
        }
      }

      if (longPressTimer) {
        clearInterval(longPressTimer)
        longPressTimer = null
      }

      if (longPressed) {
        pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY)
        longPressed = false
        multiplier = 0
      }
    }

    el.addEventListener('mousedown', mousedownHandler)
    el.addEventListener('mouseup', mouseupHandler)

      ; (el as any)._particleExplosionMousedown = mousedownHandler
      ; (el as any)._particleExplosionMouseup = mouseupHandler
  },

  unmounted(el: HTMLElement) {
    const mousedownHandler = (el as any)._particleExplosionMousedown
    const mouseupHandler = (el as any)._particleExplosionMouseup

    if (mousedownHandler) {
      el.removeEventListener('mousedown', mousedownHandler)
      delete (el as any)._particleExplosionMousedown
    }

    if (mouseupHandler) {
      el.removeEventListener('mouseup', mouseupHandler)
      delete (el as any)._particleExplosionMouseup
    }
  }
}

export default particleExplosion
