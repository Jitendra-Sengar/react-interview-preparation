import React, { useState } from 'react'

const UploadImage = () => {

    const [file, setFile]=useState(null)

    const handleFileChange=(e)=>{
      const selectedFile=e.target.files[0]
        setFile(selectedFile)
    }
  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" name="" id="" accept='image/*' onChange={handleFileChange}/>
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
      
    </div>
  )
}

export default UploadImage
