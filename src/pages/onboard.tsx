import Button from '@components/UI/Button'
import Input, { TextArea } from '@components/UI/Input'
import React, { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import debounce from 'lodash.debounce'
import { API } from '@api/index'
import Loader from '@components/Loader'
import { useAuthStore } from '@store/index'
import Router from 'next/router'
import PrivateRoute from '@routes/PrivateRoute'
import { TagsInput } from '@components/UI/TagsInput'
import { SKILL_CATEGORIES } from 'src/constants'
type Props = {}

type FormData = {
  username:string 
  name:string 
  bio:string
}

const Onboard = (props: Props) => {
  const {register,handleSubmit,trigger,formState:{errors},setError,clearErrors} = useForm<FormData>();
  const [loading,setLoading] = useState<boolean>(false);
  const [checking,setChecking] = useState<boolean>(false)
  const updateProfile = useAuthStore(state => state.updateUserDetail)
  const [skills,setSkills] = useState<string[]>([])
  
  const checkIfUsernameTaken = debounce(async (e:ChangeEvent<HTMLInputElement>) => {
    try{
    const username = e.target.value
    console.log(username,"checking")
    if(!username) {
      clearErrors("username")
      return
    }
    setChecking(true);
    const res = await API.get(`/user/check-username/${username}`)
    setChecking(false)
      if(res?.data?.success){
        clearErrors("username")
        return true
      }
    } catch(err:any){
      setChecking(false)
      if(err?.response?.status === 400){
        setError("username",{type:"validate",message:"Username not available!"})
        return false
      }
    }
  },1000)


  const handleOnboard:SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    await updateProfile({...data,skills}).then(()=>Router.push("/"))
    setLoading(false)

  }

  return (
    <PrivateRoute>

    <div className="section__height flex flex-col justify-center w-full max-w-md mx-auto ">
          <h1 className="text-4xl font-bold">Tell us about yourself</h1>
          <form onSubmit={handleSubmit(handleOnboard)}>
            <div className="mt-6">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Username{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                {checking && <div className='absolute right-4 top-2'> <Loader col='text-primary'/> </div>}
                <Input
                  {...register("username",{
                    pattern: {value:/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,message:"Invalid Username ( Length must be greater than 3 and less than 15 , should not contain space )"}
                  })}
                  min={3}
                  max={15}
                  
                  required
                  onChange={checkIfUsernameTaken}
                  placeholder="Enter username"
                  cls={"w-full h-14 px-4 " + (errors?.username && "!border-red-500 !ring-red-500")}
                  />
                {errors.username?.message && <span className='my-2 text-red-500 font-medium text-sm'>{errors?.username.message}</span>}
                {/* {getValues('username') && taken && <span className='my-2 text-red-500 font-medium text-sm'>Username taken</span>} */}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-base font-medium text-gray-900">
              Full Name
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <Input
                  required
                  {...register("name")}
                  placeholder="Enter your full name"
                  cls="w-full h-14 px-4"
                  />
                </div>
            </div> 
            <div className="mt-4">
              <label className="text-base font-medium text-gray-900">
              Brief introduction
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <TextArea
                  required
                  {...register("bio")}
                  placeholder="Tell us something about yourself"
                  cls="w-full p-4"
                  />
                </div>
            </div> 
            <div className="mt-4">
              <label className="text-base font-medium text-gray-900">
              Add Skills
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <TagsInput className="!p-4" placeholder="Type something.." tags={skills} setTags={setSkills} suggestions={SKILL_CATEGORIES} autocomplete/>
                </div>
            </div> 

            <Button
              type="submit"
              disabled={checking || Object.keys(errors).length !== 0}
              isLoading={loading}
              cls="h-14 w-full bg-primary text-white rounded-md mt-6 font-semibold"
              >
              Submit
            </Button>
          </form>
        </div>
              </PrivateRoute>
  )
}

export default Onboard