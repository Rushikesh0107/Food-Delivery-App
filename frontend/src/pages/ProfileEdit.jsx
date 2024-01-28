import React from 'react'
import ChangeProfilePhoto from '../components/core/Profile/ChangeProfilePhoto'
import UserInfoFormEdit from '../components/core/Profile/EditProfile'

const ProfileEdit = () => {
  return (
    <div
    className='flex flex-col items-center w-full h-full bg-gradient-to-r from-gray-100 to-green-900'
    >
        <ChangeProfilePhoto />

        <div>
            <UserInfoFormEdit />
        </div>
    </div>
  )
}

export default ProfileEdit