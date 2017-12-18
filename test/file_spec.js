import { expect } from 'chai'
import { stub } from '../src/better_sinon'
import File from '../src/file'

describe('file', () => {

  let file = new File()
  let fileStub

  beforeEach(() => {
    fileStub = stub(file, 'methodOne')
  })

  afterEach(() => {
    fileStub.restore()
  })

  it('does not throw error', () => {
    fileStub.returns(2)
    expect(file.methodOne()).to.equal(2)
  })

  it('throws exception', () => {
    expect(file.methodOne).to.throw('stub this!')
  })
})
