import { useState } from "react"

export const useHandleEffects = () => {
  // const [effectsList, setEffectsList] = useState<Array<string>>([""])
  const [gray, setGray] = useState('')
  const [cartoon, setCartoon] = useState('')
  const [sepia, setSepia] = useState('')
  const [pixel, setPixel] = useState('')

  let effectList:String[] = []

  const handleGray = () => {
    if (gray.length > 0) {
      setGray('')
      effectList = effectList.filter((item) => item!=='gray')
    } else {
      effectList.push('gray')
      setGray('gray')
    }
  }

  const handlePixelate = () => {
    if (gray.length > 0) {
      setPixel('')
      effectList = effectList.filter((item) => item!=='pixel')
    } else {
      effectList.push('pixel')
      setPixel('pixel')
    }
  }

  const handleCartoonify = () => {
    if (gray.length > 0) {
      setCartoon('')
      effectList = effectList.filter((item) => item!=='cartoon')
    } else {
      effectList.push('cartoon')
      setCartoon('cartoon')
    }
  }

  return {
    effectList,
    handleGray,
    handlePixelate,
    handleCartoonify,
  }
}