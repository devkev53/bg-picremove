import { Cloudinary } from "@cloudinary/url-gen"
import { cartoonify, pixelate, sepia, grayscale, removeBackground } from "@cloudinary/url-gen/actions/effect";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { image } from "@cloudinary/url-gen/qualifiers/source";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dn83qw1rq'
  },
  url: {
    secure:true
  }
})

export const addImageEffects = (publicId:string, effectList:Array<String>) => {
    const image = cloudinary.image(publicId)
    if (effectList.includes("cartoon")) {
      image.effect(cartoonify())
    }
    if (effectList.includes("pixel")) {
      image.effect(pixelate())
    }
    if (effectList.includes("sepia")) {
      image.effect(sepia())
    }
    if (effectList.includes("gray")) {
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
