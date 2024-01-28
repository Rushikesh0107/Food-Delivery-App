import React from 'react'
import ChangeProfilePhoto from '../components/core/Profile/ChangeProfilePhoto'
import EditAddress from '../components/core/Profile/EditAddress'
import EditProfile from '../components/core/Profile/EditProfile'

const ProfileEdit = () => {
  return (
    <div
    className='flex flex-col items-center w-full h-full bg-gradient-to-r from-gray-100 to-green-900'
    >
        <ChangeProfilePhoto />

        <div
        className=''
        >
            <div>
            <EditProfile />
            </div>

            <div>
                <EditAddress />
            </div>
        </div>

    </div>
  )
}

export default ProfileEdit