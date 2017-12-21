import { expect } from 'chai'
import { stub } from '../src/better_sinon'
import * as sinon from 'sinon'

describe('Stub', () => {

  class Bomb {
    explode() {
      throw new Error('stub this!')
    }

    fetchStatus() {
      return Promise.resolve('bomb status')
    }
  }

  describe('resolves', () => {

    it('returns a promise which resolves to the provided value', () => {
      const bomb = new Bomb()
      stub(bomb, 'fetchStatus').resolves('banana')

      return bomb.fetchStatus().then((value) => {
        expect(value).to.equal('banana')
      })
    })
  })

  describe('returns', () => {

    it('does not throw when explode is stubbed', () => {
      const bomb = new Bomb()
      stub(bomb, 'explode').returns(2)
      expect(bomb.explode()).to.equal(2)
    })

    it('throws exception when explode is not stubbed', () => {
      const bomb = new Bomb()
      expect(bomb.explode).to.throw('stub this!')
    })
  })

  //TODO: test restore
})
