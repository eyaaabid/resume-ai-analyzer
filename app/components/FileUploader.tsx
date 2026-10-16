import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

const FileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, []);
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <div className='w-full gradient-border'>
         <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="space-y-4 cursor-pointer">
        <img src="/icons/info.svg" alt="upload" className="size-20"/>

      </div>
    </div>
    </div>
  )
}

export default FileUploader