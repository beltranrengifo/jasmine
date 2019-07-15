/* eslint-disable no-undef */
describe('ToBe and toEqual', () => {
  it('should be zero', () => {
    const foo = 0
    expect(foo).toBe(0) // toBe or toEqual is the same for primitive types
  })
  it('should be zero', () => {
    const foo = 0
    expect(foo).toEqual(0)
  })
  it('should be equal objects', () => {
    const foo = { a: 1, b: 3 }
    const bar = { a: 1, b: 2 }
    expect(foo).toEqual(bar)
  })
  it('should not be same objects', () => {
    const foo = { a: 1, b: 2 }
    const bar = { a: 1, b: 2 }
    expect(foo).not.toBe(bar)
  })
})
