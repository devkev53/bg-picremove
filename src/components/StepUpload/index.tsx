import { useCallback, useMemo, useState } from 'react';
import {useDropzone, FileRejection, FileError} from 'react-dropzone'
import FileUploadProgress from '../UI/FileUploadProgress';

import { baseStyle, focusStyle } from './styles';

export interface UploadbleFile {
  file: File;
  errors: FileError[]
}

const index = () => {
  const [files, setFiles] = useState<UploadbleFile[]>([])

  const onDrop = useCallback((acceptedFiles:File[], rejectFiles:FileRejection[]) => {
    // Hacer lo que corresponde con los archivos
    acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    const accept = acceptedFiles.map((file) => ({file, errors:[]}))
    setFiles(accept)
  },[])

  const {
    acceptedFiles,
    fileRejections,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    maxFiles:1, 
    accept:{
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/webp': ['.webp'],
    },
    onDrop
  },)

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusStyle: {}),
    ...(isDragActive? focusStyle: {})
  }),[
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  ])

  const rejectionsFiles = fileRejections.map(({file, errors}) => {
    console.log(errors)
  })

  return (
    <form
      {...getRootProps({style})}
      action="https://res.cloudinary.com/v1_1/dn83qw1rq/image/upload"
      className={
        `shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video
        w-full flex items-center justify-center flex-col
        ${files.length > 0 && 'pointers-events-none'}`
      }
    >

      {files.length > 0
        ? files.map(({file}) => (
          <FileUploadProgress key={file.path} file={file} />
        ))
        : (<>
          <button className="font-bold pointer-events-none bg-blue-600 rounded-full text-white text-xl px-8 py-3">
            Upload Image
          </button>
          <strong className='text-lg mt-4 text-gray-500'>or drop a file</strong>
        </>)
      }
    </form>
  );
}

export default index;