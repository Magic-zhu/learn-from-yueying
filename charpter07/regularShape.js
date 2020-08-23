import Vector2d from 'libs/Vector2d'
export const regularShape = function (edges, x, y, step) {
    const points = []
    const deg = Math.PI * (1 - (edges - 2) / edges)
    const dir = new Vector2d(step, 0)
    let p = new Vector2d(x, y)
    points.push(basePoint)
    for (let i = 0; i < edges + 1; i++) {
        p = p.copy().add(dir.rotate(deg))
        points.push(p)
    }
    return points
}