import React from 'react'
import CreatorsContent from './CreatorsContent'
import getRequest from '@/server/getRequest'

const Creators = async () => {
  const creators = await getRequest("/user")
  
  return (
    <CreatorsContent creators={creators.data ? creators.data : []}/>
  )
}

export default Creators