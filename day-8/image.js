class Layer {
  constructor(string, width, height) {
    let rows = []
    const rawData = Array.from(string)

    for(let i=0; i<height; i++) {
      const line = rawData.splice(0,width)
      rows.push(line)
    }

    this.rows = rows
  }

  getNumberOfEntries(value) {
    let count = 0

    this.rows.forEach(row => {
      row.forEach(entry => {
        if (entry === value) {
          count++
        }
      })
    })

    return count
  }
}

class Image {
  constructor(string, width, height) {
    const layerDataSize = width * height

    let index = 0
    let layers = []

    while (index < string.length) {
      const array = string.substring(index, (index + layerDataSize))
      const layer = new Layer(array, width, height)
      layers.push(layer)
      index += layerDataSize
    }

    this.layers = layers
    this.decodedImage = []
  }

  findLayerWithFewestZeros() {
    let layersData = []

    this.layers.forEach((layer, i) => {
      const numberOfZeros = layer.getNumberOfEntries('0')
      layersData.push({layerNumber: i, numberOfZeros})
    })

    if (layersData.length === 0) return false

    let { layerNumber, numberOfZeros } = layersData[0]

    layersData.forEach(layer => {
      if (layer.numberOfZeros < numberOfZeros) {
        layerNumber = layer.layerNumber
        numberOfZeros = layer.numberOfZeros
      }
    })

    return { layerNumber, numberOfZeros }
  }

  decodeImage() {
    const image = [...this.layers[0].rows]

    this.layers.forEach((layer) => {
      layer.rows.forEach((row, i) => {
        row.forEach((item, j) => {
          if (image[i][j] === '2') {
            image[i][j] = item
          }
        })
      })
    })

    this.decodedImage = image
  }

  printImage() {
    this.decodedImage.forEach(row => console.log(row.toString()))
  }
}

module.exports = {
  Image,
  Layer
}