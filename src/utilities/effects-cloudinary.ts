import { Cloudinary } from "@cloudinary/url-gen"
import { cartoonify, backgroundRemoval } from "@cloudinary/url-gen/actions/effect"

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dn83qw1rq'
  },
  url: {
    secure:true
  }
})

export const addEeffect = (public_id:string) => {
  const imageWithoutBackground = cloudinary
    .image(public_id)
    .effect(backgroundRemoval())
  
  return imageWithoutBackground.toURL()
}
