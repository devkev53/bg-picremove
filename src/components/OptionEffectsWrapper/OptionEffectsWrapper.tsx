import { useEffect } from 'react'
import { useHandleEffects } from '../../hooks/useHandleEffects'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import styles from './styles.module.css'

export const OptionEffectsWrapper = () => {
  const {handleCartoonify, handlePixelate, handleGray, handleSepia, effectList} = useHandleEffects()

  useEffect(()=>{
  },[effectList])

  return (
    <div className={styles.optionsEffects}>
      <button
        className={`
          ${styles.btn}
          ${effectList.find(item=>item.name==="cartoonify")?.apply===true&& styles.active}
        `}
        onClick={handleCartoonify}
      >
        <span>
          Cartoonify
        </span>
        <i><CheckCircleIcon/></i>
      </button>
      <button 
        className={`
          ${styles.btn}
          ${effectList.find(item=>item.name==="pixelate")?.apply===true&& styles.active}
        `}
        onClick={handlePixelate}
      >
        <span>
          Pixelate
        </span>
        <i><CheckCircleIcon/></i>
      </button>
      <button 
        className={`
          ${styles.btn}
          ${effectList.find(item=>item.name==="sepia")?.apply===true&& styles.active}
        `}
        onClick={handleSepia}
      >
        <span>
          Sepia
        </span>
        <i><CheckCircleIcon/></i>
      </button>
      <button 
        className={`
          ${styles.btn}
          ${effectList.find(item=>item.name==="grayscale")?.apply===true&& styles.active}
        `}
        onClick={handleGray}
      >
        <span>
          Gray Scale
        </span>
        <i><CheckCircleIcon/></i>
      </button>
    </div>
  )
}
