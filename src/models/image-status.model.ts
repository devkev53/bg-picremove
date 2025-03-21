export const image_status_types = {
  'EXPECTING':-2,
  'READY': 0,
  'UPLOADING': 1,
  'DONE': 2,
  'DOWNLOAD': 3,
  'ERROR': -1,

}

export interface MyFileI extends File {
  preview?: string;
  path?:string;
}