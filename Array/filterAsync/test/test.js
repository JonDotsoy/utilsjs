const {expect} = require('chai')
const {default: filterAsync} = require('..')

describe('Filter Async', () => {
  it('module require', () => {
    expect(
      require('..').default
    ).to.be.equal(
      require('..').filterAsync
    )
  })

  it('filterAsync()', async () => {
    expect(
      await filterAsync([1, 2, 3, 4, 5, 6, 7, 8], async (el, indexEl, arr) => (el % 2 === 0))
    ).to.be.eql(
      [2, 4, 6, 8]
    )
  })

  describe('polyfill', () => {
    it('require', () => {
      require('../polyfill')
    })

    it('array.filterAsync(fn)', async () => {
      expect(
        await [1, 2, 3, 4, 5, 6, 7, 8].filterAsync(async (el, indexEl, arr) => (el % 2 === 0))
      ).to.be.eql(
        [2, 4, 6, 8]
      )
    })
  })
})
