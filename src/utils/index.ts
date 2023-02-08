import { instrument } from './consts'

export const getInstrumentDataById = (id: number) => {
  return instrument.find(item => item.id === id)
}

export const uid = (() => {
  let id = 1
  return (...args: number[]) => {
    if (args[0] === 0) {
      id = 1
    }
    return id++
  }
})()
