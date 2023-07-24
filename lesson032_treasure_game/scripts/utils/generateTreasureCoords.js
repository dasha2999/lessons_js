import { generateRandomNumber } from "./generateRandomNumber.js";

export const generateTreasureCoords = ({width, height}, gap) => ({
    // gap - отступ от края карты
    // width - ширина карты, а height - высота карты
    x: generateRandomNumber(width, gap),
    y: generateRandomNumber(height, gap)
});