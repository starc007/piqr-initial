import Button from '@components/UI/Button'
import Input from '@components/UI/Input'
import { useAuthStore } from '@store/index'
import React, { useState } from 'react'

type Props = {
  receiverId:string 
}

const SendMessage = ({receiverId}: Props) => {
  const [message,setMessage] = useState<string>("")
  const sendMessage = useAuthStore(state=>state.sendMessage)
  
  const handleSendMessage = async () => {

  }

  return (
    <div className='flex gap-2 border-t pt-4 mt-4'>
      <Input onChange={e=>setMessage(e.target.value)} value={message} cls="w-full h-12 px-4" placeholder='Write a message ...'/>
      <Button disabled={message === ''} onClick={()=>sendMessage({uid:receiverId,message})} cls='px-8  gap-4 bg-primary text-white   rounded-md  font-semibold gap"'>Send </Button>
    </div>
  )
}

export default SendMessage