    import { useForm } from "react-hook-form"
    import { useDispatch, useSelector } from "react-redux"
    import { useNavigate } from "react-router-dom"

    import { updateUserAddress } from "../../../services/Operations/profileAPI"

    export default function EditAddress() {
    const {address} = useSelector((state) => state.address)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitAddressForm = async (data) => {
        //console.log("Form Data - ", data)
        try {
        dispatch(updateUserAddress(data))
        } catch (error) {
        console.log("ERROR MESSAGE - ", error.message)
        }
    }
    return (
        <>
        <form 
        onSubmit={handleSubmit(submitAddressForm)}
        className="w-full flex flex-col gap-5 mb-10 "
        >
            {/* Address Information */}
            <div className="flex flex-col gap-y-6 rounded-md border-[1px] p-8 px-16">
            <h2 className="text-lg font-semibold">
                Address Information
            </h2>

            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="addressLine1" className="lable-style">
                    Address-Line 1
                </label>
                <input
                    type="text"
                    name="addressLine1"
                    id="addressLine1"
                    placeholder="Enter fullname name"
                    className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                    {...register("addressLine1", { required: true })}
                    defaultValue={address?.addressLine1}
                />
                {errors.firstName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Address Line 1.
                    </span>
                )}
                </div>

                <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="addressLine2" className="lable-style">
                    Address-Line 2
                </label>
                <input
                    type="text"
                    name="addressLine2"
                    id="addressLine2"
                    placeholder="Enter first name"
                    className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                    {...register("addressLine2", { required: true })}
                    defaultValue={address?.addressLine2}
                />
                {errors.lastName && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Address Line 2
                    </span>
                )}
                </div>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="city" className="lable-style">
                        City
                </label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter Contact Number"
                    className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                    {...register("city", {
                    required: {
                        value: true,
                        message: "Please enter your City",
                    }
                    })}
                    defaultValue={address?.city}
                />
                {errors.contactNumber && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.contactNumber.message}
                    </span>
                )}
                </div>

                <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="state" className="lable-style">
                    State
                </label>
                <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter Bio Details"
                    className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                    {...register("state", { 
                        required: true,
                        message: "Please enter your State",
                    })}
                    defaultValue={address?.state}
                />
                {errors.about && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your State.
                    </span>
                )}
                </div>

                <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="pincode" className="lable-style">
                    Pincode
                </label>
                <input
                    type="number"
                    name="pincode"
                    id="pincode"
                    placeholder="Enter Pincode"
                    className="p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                    {...register("pincode", { required: true })}
                    defaultValue={address?.pincode}
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