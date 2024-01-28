import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { updateProfile } from "../../../services/Operations/profileAPI"

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitProfileForm = async (data) => {
    //console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form 
      onSubmit={handleSubmit(submitProfileForm)}
      className="w-full flex flex-col gap-5 mb-10 "
      >
        {/* Profile Information */}
        <div className="flex flex-col gap-y-6 rounded-md border-[1px] p-8 px-16">
          <h2 className="text-lg font-semibold">
            Profile Information
          </h2>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="fullname" className="lable-style">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter fullname name"
                className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                {...register("fullname", { required: true })}
                defaultValue={user?.fullname}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your fullname name.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="username" className="lable-style">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                {...register("username", { required: true })}
                defaultValue={user?.username}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your username name.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="phone" className="lable-style">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Contact Number"
                className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.phone}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="email" className="lable-style">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Bio Details"
                className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                {...register("email", { required: true })}
                defaultValue={user?.email}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Email.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => { navigate("/profile") }}
            className="cursor-pointer rounded-md py-2 px-5 font-semibold bg-red-500 text-white"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="cursor-pointer rounded-md py-2 px-5 font-semibold bg-green-500 text-white"
          >
            Save Changes
          </button>

        </div>

      </form>
    </>
  )
}