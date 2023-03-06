import axios from 'axios'
import { Cloudinary } from '@cloudinary/url-gen'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dn83qw1rq'
  },
  url: {
    secure:true
  }
})

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dn83qw1rq/image/upload'
const CLOUDINARY_KEY = '267945431327545'

const formData = new FormData()
formData.append('file', file)
formData.append('upload_preset', 'ml_default')
formData.append('timestamp', (Date.now() /1000).toString())
formData.append('key', CLOUDINARY_KEY)

const resp = await axios.post()