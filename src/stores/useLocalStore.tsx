import create from 'zustand'
import { LocalStorage } from '../shared/localStorage'

interface Local {
  hasReadWelcomes: boolean
  setHasReadWelcomes: (read: boolean) => void
}
const init = LocalStorage.getReadWelcomes()
export const useLocalStore = create<Local>((set, get) => (
  {
    hasReadWelcomes: init === 'yes',
    setHasReadWelcomes: (read: boolean) => {
      const result = read ? 'yes' : 'no'
      LocalStorage.setReadWelcomes(result)
      set({ hasReadWelcomes: result === 'yes' })
    },
  }
))
