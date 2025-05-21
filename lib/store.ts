"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Settings {
  name?: string
  email?: string
  role?: string
}

interface SettingsState {
  settings: Settings | null
  setSettings: (settings: Settings) => void
  resetSettings: () => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: null,
      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: null }),
    }),
    {
      name: "settings-storage",
    },
  ),
)
