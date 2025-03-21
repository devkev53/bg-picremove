import { useState } from "react"
import { EffectI, effectStore } from "../store/effectStore"

export const useHandleEffects = () => {
  // const [effectsList, setEffectsList] = useState<Array<string>>([""])
  const [gray, setGray] = useState('')
  const [cartoon, setCartoon] = useState('')
  const [sepia, setSepia] = useState('')
  const [pixel, setPixel] = useState('')

  const {effects:effectList, setEffects} = effectStore(state=>state)

  const handleChangeEffect = (name:string) => {
    let cartoonify:EffectI = effectList.find((item)=> item.name===name ) || {name:name, apply:false}
    let extractEffects = effectList.filter((item)=> item.name!==name )
    if(cartoonify?.apply===true) {
      console.log("Apply False")
      cartoonify.apply = false
    }else {
      console.log("Apply True")
      cartoonify.apply = true
    }
    setEffects([
      ...extractEffects,
      cartoonify
    ])
  }

  const handleGray = () => {
    handleChangeEffect("grayscale")   
  }

  const handlePixelate = () => {
    handleChangeEffect("pixelate")   
  }

  const handleCartoonify = () => {
    handleChangeEffect("cartoonify")   
  }

  const handleSepia = () => {
    handleChangeEffect("sepia")   
  }

  return {
    effectList,
    handleGray,
    handlePixelate,
    handleCartoonify,
    handleSepia
  }
}