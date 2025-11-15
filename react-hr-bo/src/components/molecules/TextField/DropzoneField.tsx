import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { Upload } from 'lucide-react'

// components
import { Input } from '../../atoms/Input'

const DropzoneField = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div
      className="flex items-center justify-center bg-gray-100 w-[80px] h-[80px]  border border-dashed border-gray-300 cursor-pointer  dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500"
      {...getRootProps()}
    >
      <Upload />

      <Input {...getInputProps()} />
      {/* {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )} */}
    </div>
  )
}

export default DropzoneField
