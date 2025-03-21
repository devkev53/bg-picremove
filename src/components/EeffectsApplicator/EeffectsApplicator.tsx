import { useEffect, useState } from 'react'
import { useHandleEffects } from '../../hooks/useHandleEffects'
import { useHandleImage } from '../../hooks/useHandleImage'
import styles from './styles.module.css'
import { addImageEffects } from '../../utilities/effects-cloudinary'

export const EeffectsApplicator = () => {
  const {
    originalImage, imagePublicId,
    modifiedImage, setModifiedImage,
    handleClearImage
  } = useHandleImage()
  const {effectList} = useHandleEffects()

  const handleAplyEffects = () => {
    if (imagePublicId!== null) {
      const imageWithEffects = addImageEffects(imagePublicId, effectList)
      setModifiedImage(imageWithEffects)
    }
  }

  useEffect(() => {
    handleAplyEffects()
    console.log(modifiedImage)
  }, [effectList])


  return (
    <div
      className={styles.uploadDiv}
    >
        <two-up className={styles.twoUp}>
          {/* Original Cloudinary Img */}
          <picture>
            <img src={originalImage} alt={imagePublicId!== null?imagePublicId:"Original Image"} />
          </picture>
          {/* Image With Effects by Cloudinary */}
          <picture>
            <img src={modifiedImage} alt="Image With Effects" />
          </picture>
        </two-up>
    </div>
  )
}
