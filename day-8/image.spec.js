const Image = require('./Image')

const expect = require('chai').expect

describe('Image', () => {
  const width = 3
  const height = 2
  const rawData = '123456789012'
  const data = [[['1', '2', '3'], ['4', '5', '6']], [['7', '8', '9'], ['0', '1', '2']]]

  it('should create layer', () => {
    const layer = new Image.Layer(rawData, width, height)

    expect(layer.rows).to.deep.equal(data[0])
  }),
  it('should create image', () => {
    const image = new Image.Image(rawData, width, height)

    expect(image.layers[0].rows).to.deep.equal(data[0])
    expect(image.layers[1].rows).to.deep.equal(data[1])

    const result = image.findLayerWithFewestZeros()

    expect(result).to.deep.equal({ layerNumber: 0, numberOfZeros: 0 })
  })
})