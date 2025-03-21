import { create } from "zustand";

export interface EffectI {
  name: string,
  apply: boolean
}

export interface EfectStoreI {
  effects:Array<EffectI>,
  setEffects: (effects: Array<EffectI>) => void
}

const effectList:Array<EffectI> = [
  {name:"cartoonify", apply:false},
  {name:"sepia", apply:false},
  {name:"pixelate", apply:false},
  {name:"grayscale", apply:false},
]

export const effectStore = create<EfectStoreI>((set) => ({
  effects: effectList,
  setEffects: (effects:Array<EffectI>) => set({effects})
}))