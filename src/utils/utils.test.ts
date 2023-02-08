import { getInstrumentDataById, uid } from '.'

describe('utils', () => {
  test('get instrument data by id', () => {
    const id = 1
    const instrument = getInstrumentDataById(id)
    expect(instrument?.id).toBe(id)
  })

  test('uid', () => {
    const id = uid()
    expect(id).toBeGreaterThan(0)
  })

  test('cancel uid', () => {
    uid()
    uid()
    uid()
    const canceledId = uid(0)
    expect(canceledId).toBe(1)
  })
})
