import { Cloudinary } from "@cloudinary/url-gen"
import { cartoonify, pixelate, sepia, grayscale, removeBackground } from "@cloudinary/url-gen/actions/effect";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { EffectI } from "../store/effectStore";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dn83qw1rq'
  },
  url: {
    secure:true
  }
})

export const addImageEffects = (publicId:string, effectList:Array<EffectI>) => {
    const image = cloudinary.image(publicId)
    const cartoon = effectList.find(item => item.name==="cartoonify")
    const pixel = effectList.find(item => item.name==="pixelate")
    const gray = effectList.find(item => item.name==="grayscale")
    const sep = effectList.find(item => item.name==="sepia")
    if (cartoon?.apply) {
      image.effect(cartoonify())
    }
    if (pixel?.apply) {
      image.effect(pixelate())
    }
    if (sep?.apply) {
      image.effect(sepia())
    }
    if (gray?.apply) {
      image.effect(grayscale())
    }
    return image.toURL()
}
export const removeBg = (publicId:string) => {
  const image = cloudinary.image(publicId)
  image.effect(removeBackground())
  return image.toURL()
}

// export const addEeffect = async (public_id:string) => {
//   try {
//     const image = await cloudinary.image(public_id)
//     const imageWithoutBackground = await image.effect(backgroundRemoval())
//     console.log(image.effect(backgroundRemoval().fineEdges()))
//     // console.log(imageWithoutBackground.transformation.actions[0])
//     return imageWithoutBackground.toURL()
//   } catch (error) {
//     console.log(error)
//   }
//   // const imageWithoutBackground = cloudinary
//   //   .image(public_id)
//   //   .effect(backgroundRemoval())
//   // return imageWithoutBackground.toURL()
// }
