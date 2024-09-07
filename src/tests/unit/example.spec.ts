import process from 'node:process'
import { describe, expect, it } from 'vitest'

describe('an example test suite should always pass', () => {
  it('should always pass', () => {
    expect(2 + 2).toBe(4)
  })
  it ('should always pass pt. 2', () => {
    expect(true).toBe(true)
  })
})

describe('an example test suite should always fail', () => {
  it ('should always fail', () => {
    expect(3 + 2).toBe(4)
  })
  it ('should always fail pt. 2', () => {
    expect(false).toBe(true)
  })
})