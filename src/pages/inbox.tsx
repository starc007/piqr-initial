import Input from '@components/UI/Input';
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiMagnifyingGlass } from 'react-icons/hi2';

type Props = {}

const Inbox = (props: Props) => {
  const [messages,setMessages] = React.useState<any>(["User 1","User 2","User 3","User 4","User 5","User 6","User 7"]);

  return (
    <div className='section__height divide-x border-x bg-white shadow-lg grid grid-cols-3'>
      {/* Sidebar */}
      <div className='flex flex-col col-span-1 '>
        <div className='border-b p-4 font-bold text-xl'>
          Inbox
        </div>
        <div className='p-4 border-b relative text-gray-400 focus-within:text-gray-600'>
        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
          <HiMagnifyingGlass className='h-6 w-6'/>
        </div>
          <Input placeholder='Search a user' cls="bg-gray-50 w-full h-10 pl-10 pr-4"/>
        </div>
        {messages.map((item:any,idx:number)=>(
          <div key={`msgs-${idx}`} className='p-4 border-b flex items-center gap-4 hover:bg-gray-50 duration-200 ease-out cursor-pointer'>
            {/* Todo: Replace with avatar */}
            <div className='h-10 w-10 bg-gray-300'/>
            <div className=' font-medium text-gray-600'>
              <div className=''>
                {item}
              </div>
              <div className='text-sm text-gray-400'>
              Lorem Ipsum
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Main */}
      <div className='col-span-2 p-4 '>
        <p className='text-2xl font-bold mb-4'>Username</p>
        <div className='space-y-4 w-full'>
        <div className='bg-gray-100 p-4  rounded-xl rounded-tl-none max-w-fit '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere?</div>
        <div className='bg-secondary ml-auto text-white p-4 rounded-xl rounded-br-none max-w-fit '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere?</div>
        <div className='bg-gray-100 p-4 border-gray-400  rounded-lg rounded-tl-none max-w-fit '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere?</div>
        </div>
      </div>
    </div>
  )
}

export default Inbox