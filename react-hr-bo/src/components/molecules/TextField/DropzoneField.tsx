import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import type { FieldError } from 'react-hook-form'

import { Upload } from 'lucide-react'

// components
import { Input } from '../../atoms/Input'

interface DropzoneFieldProps {
  onSelectField?: (file: string) => void
  error?: FieldError | undefined
  value?: string | undefined
}

const DropzoneField = ({ onSelectField, error, value }: DropzoneFieldProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      if (!acceptedFiles || acceptedFiles.length == 0) return
      const file = acceptedFiles[0]


      onSelectField?.(file.name)
    },
    [onSelectField]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxSize: 2 * 1024 * 1024, // 2MB,
    multiple: false,
  })

  return (
    <div
      className="mb-8 flex items-center justify-center bg-gray-100 w-[80px] h-[80px]  border border-dashed border-gray-300 cursor-pointer  dark:hover:border-brand-500 dark:border-gray-700 dark:bg-white-900 rounded-xl hover:border-brand-500"
      {...getRootProps()}
    >
      <Upload />

      <Input value={value ?? ''} {...getInputProps()} />
      {/* {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )} */}
      {error?.message && (
        <p className="text-sm text-error-500 mt-1">{error?.message}</p>
      )}
    </div>
  )
}

export default DropzoneField
