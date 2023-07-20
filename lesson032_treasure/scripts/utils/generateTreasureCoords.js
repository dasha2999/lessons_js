import { generateRandomNumbers } from "./generateRandomNumbers.js"

export const generateTreasureCoords = ({width, height}, gap) => ({
     x: generateRandomNumbers(width, gap),
     y: generateRandomNumbers(height, gap)
})