import { useCallback, useMemo, useState } from 'react';
import {useDropzone, FileRejection, FileError} from 'react-dropzone'
import { SnackbarUtilities } from '../../utilities/snackbar-manager';
import { MyFileI } from '../../models/image-status.model';
import { baseStyle, focusStyle } from '../StepUpload/styles';
import UploadProgress from '../UploadProgress'

import styles from './styles.module.css'

export interface UploadbleFile {
  file: MyFileI;
  errors: FileError[]
}

const index = () => {
  const [files, setFiles] = useState<UploadbleFile[]>([])

  const onDrop = useCallback((acceptedFiles:File[], rejectFiles:FileRejection[]) => {
    // Hacer lo que corresponde con los archivos
    acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    rejectFiles.map(({file, errors}) => {
      errors.map(({code, message}) => {
        // console.error(code, message)
        SnackbarUtilities.error(message)
      })
    })
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
  
  return (
    <form
      {...getRootProps({style})} 
      action="" className={styles.formContainer}
    >
      {files.length > 0 
        ? files.map(({file}) => (
          <UploadProgress key={file.path} file={file} />
        ))
        :(<>
          <div>

          </div>
        </>)
      }
    </form>
  );
}

export default index;