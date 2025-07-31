import { Button, FileInput, Select, TextInput,  Alert } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {

  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }

      setImageUploadError(null);
      const formDataCloud = new FormData();
      formDataCloud.append('file', file);
      formDataCloud.append('upload_preset', 'blogging'); // change this
      const cloudName = 'dszbsfjrl'; // change this

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = ((e.loaded / e.total) * 100).toFixed(0);
          setImageUploadProgress(progress);
        }
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setFormData((prev) => ({ ...prev, image: response.secure_url }));
          setImageUploadProgress(null);
          setImageUploadError(null);
        } else {
          setImageUploadError('Upload failed');
          setImageUploadProgress(null);
        }
      };

      xhr.onerror = () => {
        setImageUploadError('Upload failed');
        setImageUploadProgress(null);
      };

      xhr.send(formDataCloud);
    } catch (error) {
      console.log(error);
      setImageUploadError('Upload failed');
      setImageUploadProgress(null);
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type='text' placeholder='Title' required id='title'
             className='flex-1'
             onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            />
             <Select
              onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
             >
                <option value="unauthorized">Select a category</option>
                <option value="javascrpt">Javascript</option>
                <option value="reactjs">React.js</option>
                <option value="nextjs">Next.js</option>
             </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
            <FileInput type='file' accept='image/*' 
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button type='button' className='bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' size='sm' outline
              onClick={handleUploadImage}
              disabled={imageUploadProgress}
            >
              {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
              ) : (
                'Upload Image'
              )}
            </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )}
        <ReactQuill theme="snow" placeholder='write something...' className='h-72 mb-12' required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type='submit' className='bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800'>Publish</Button>
      </form>
    </div>
  )
}

export default CreatePost
