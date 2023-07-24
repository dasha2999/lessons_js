export function getDistanceToTreasure ({x: cX, y: cY}, {x: tX, y: tY}) {
    // теорема Пифагора
    console.log(Math.sqrt((cX - tX) ** 2 + (cY - tY) ** 2))
    return Math.sqrt((cX - tX) ** 2 + (cY - tY) ** 2)
}