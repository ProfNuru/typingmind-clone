import { create } from 'zustand'

const INITIAL_STATE = {
  sidebar: true
}

export const useStore = create((set, get) => ({
  sidebar: INITIAL_STATE.sidebar,
  openSidebar: () => {
    set({ sidebar: true })
  },
  closeSidebar: () => {
    set({ sidebar: false })
  },
  toggleSidebar: () => set({ sidebar: !get().sidebar })
}))
