
const util = require('util')
const {expect} = require('chai')
const {default: mapAsync} = require('..')

describe('Map Async', () => {
  it('module require', () => {
    expect(
      require('..').default
    ).to.be.equal(
      require('..').mapAsync
    )
  })

  it('mapAsync()', async () => {
    expect(
      await mapAsync([1, 2, 3, 4, 5, 6, 7, 8], async (el, indexEl, arr) => (el * 2))
    ).to.be.eql(
      [2, 4, 6, 8, 10, 12, 14, 16]
    )
  })

  describe('polyfill', () => {
    it('require', () => {
      require('../polyfill')
    })

    it('array.filterAsync(fn)', async () => {
      expect(
        await [1, 2, 3, 4, 5, 6, 7, 8].mapAsync(async (el, indexEl, arr) => (el * 2))
      ).to.be.eql(
        [2, 4, 6, 8, 10, 12, 14, 16]
      )
    })
  })
})
