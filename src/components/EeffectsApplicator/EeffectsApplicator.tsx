import { useEffect, useState } from 'react'
import { useHandleEffects } from '../../hooks/useHandleEffects'
import { useHandleImage } from '../../hooks/useHandleImage'
import styles from './styles.module.css'
import { addImageEffects, removeBg } from '../../utilities/effects-cloudinary'
import Spiner from '../UI/Spiner/index'
import { SnackbarUtilities } from '../../utilities/snackbar-manager'

export const EeffectsApplicator = ({isRemove}:{isRemove?:Boolean}) => {
  const [proccess, setProccess] = useState(true)

  const {
    originalImage, imagePublicId,
    modifiedImage, setModifiedImage,
    handleClearImage
  } = useHandleImage()
  const {effectList} = useHandleEffects()

  const handleApplyEffects = async () => {
    if (imagePublicId!== null) {

      // If image with to remove background
      if (isRemove) {
        const imageWithRemove = removeBg(imagePublicId)
        const resp = await fetch(imageWithRemove)
        if(resp.status===200) {
          setProccess(false)
          SnackbarUtilities.success("Effect applied correctly")
          setModifiedImage(imageWithRemove)
        } else {
          SnackbarUtilities.error("An error occurred on the Cloudinary server, the effect could not be applied.")
        }
      // If image with to apply effects
      } else {
        const imageWithEffects = addImageEffects(imagePublicId, effectList)
        const resp = await fetch(imageWithEffects)
        if(resp.status===200) {
          setProccess(false)
          SnackbarUtilities.success("Effect applied correctly")
          setModifiedImage(imageWithEffects)
        } else {
          SnackbarUtilities.error("An error occurred on the Cloudinary server, the effect could not be applied.")
        }
      }
    }
  }

  useEffect(() => {
    setProccess(true)
    handleApplyEffects()
    console.log(modifiedImage)
  }, [effectList])


  return (
    <div
      className={styles.uploadDiv}
    >
      {proccess
        ? (
          <>
            <Spiner label="Applying Effects..!"/>
            <picture>
              <img src={originalImage} alt={imagePublicId!== null?imagePublicId:"Original Image"} />
            </picture>
          </>
        )
        :(
          <two-up className={styles.twoUp}>
            {/* Original Cloudinary Img */}
            <picture>
              <img src={originalImage} alt={imagePublicId!== null?imagePublicId:"Original Image"} />
            </picture>
            {/* Image With Effects by Cloudinary */}
            <picture>
              <img
                src={modifiedImage}
                alt="Image With Effects"
              />
            </picture>
          </two-up>
        )
      }
    </div>
  )
}
