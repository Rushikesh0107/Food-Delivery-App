import React, {useState, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { updateUserAvatar } from '../../../services/Operations/profileAPI';
import {useDispatch} from 'react-redux'

const ChangeProfilePhoto = () => {
    const {user} = useSelector(state => state.profile)
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    const [profileImage, setProfileImage] = useState(null)
    const [previewSource, setPreviewSource] = useState(null)
  
    const fileInputRef = useRef(null)
  
    const handleClick = () => {
      fileInputRef.current.click()
    }
  
    const handleFileChange = (e) => {
      const file = e.target.files[0]
      // console.log(file)
      if (file) {
        setProfileImage(file)
        previewFile(file)
      }
    }
  
    const previewFile = (file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreviewSource(reader.result)
      }
    }
  
    const handleFileUpload = () => {
        try {
          // console.log("uploading...")
          setLoading(true)
          const formData = new FormData()
          formData.append("avatar", profileImage)
    
          dispatch(updateUserAvatar(formData)).then(() => {
            setLoading(false)
          })
        } catch (error) {
          console.log("ERROR MESSAGE - ", error.message)
        }
      }
    
      useEffect(() => {
        if (profileImage) {
          previewFile(profileImage)
        }
      }, [profileImage])
    

  return (

        <div
        className='flex flex-col  items-center w-full h-full'
        >
            <div
            className='flex items-center h-60 w-full md:w-1/4 p-10 justify-center '
            >
                <div
                className='flex items-center w-full justify-evenly p-3 rounded-md'
                >
                    <img
                        src={previewSource || user?.avatar}
                        alt={`profile-${user?.firstName}`}
                        className="aspect-square w-[88px] rounded-full object-cover"
                    />

                    <div className="space-y-2 ml-3">
                        <div className="flex gap-3">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                        />

                        <button
                            onClick={handleClick}
                            disabled={loading}
                            className="cursor-pointer rounded-md py-2 px-5 font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out"
                        >
                            Select
                        </button>

                        <button
                            text={loading ? "Uploading..." : "Upload"}
                            onClick={handleFileUpload}
                            className='cursor-pointer rounded-md py-2 px-5 font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out'
                        >
                            Upload
                        </button>
                </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default ChangeProfilePhoto