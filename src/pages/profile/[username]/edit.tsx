import { useRouter } from 'next/router'
import React from 'react'


const EditProfile = () => {
  const router = useRouter();
  const username = router.query.username as string 
  return (
    <div>
      
    </div>
  )
}

export default EditProfile