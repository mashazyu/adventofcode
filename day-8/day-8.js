const Image = require('./image')

const fs = require('fs')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
}

const imageCode = require("./input.txt")

const image = new Image.Image(imageCode, 25, 6)

const layer = image.findLayerWithFewestZeros()

const numberOfOnes = image.layers[layer.layerNumber].getNumberOfEntries('1')
const numberOfTwos = image.layers[layer.layerNumber].getNumberOfEntries('2')

console.log('/// Day 8.1 task result: ', numberOfOnes * numberOfTwos)

image.decodeImage()
console.log('/// Day 8.1 task result: ')
image.printImage()