import { create } from "zustand";

interface menuStoreI {
  isOpen: boolean,
  setOpen: (isOpen:boolean) => void
}

export const menuStore = create<menuStoreI>((set) => ({
  isOpen: false,
  setOpen: (isOpen:boolean) => set({isOpen})
}))