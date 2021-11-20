import { convertToObject } from "typescript"

const {shuffleArray} = require('./utils')

const array = [1, 2, 3, 4, 5]
const shuffledArray = shuffleArray(array)

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray should return an array with length 2', () => {
        expect(shuffledArray).toHaveLength(2)
})    

    test('shuffleArray should contain the same items', () => {
        expect(shuffledArray.sort).toEqual(array.sort);
})

    test('shuffleArray should be defined', () => {
        expect(shuffledArray).toBeDefined()
})

})

