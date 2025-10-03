import React, { FC } from 'react'
import CustomImage from './CustomImage'
import { API } from '@/hooks'
import Heading from './Heading'
import { CategoryType } from '@/@types/CategoryType'

const CategoryCard: FC<{item : CategoryType}> = ({item}) => {
  return (
    <div className='w-[240px] category-card cursor-pointer rounded-[20px] overflow-hidden '>
        <div className='relative w-[240px] h-[240px] overflow-hidden '>
            <CustomImage classList='blur category-img !duration-300' src={`${API}/file/${item.image}`} alt='img' W={240} H={240} />
            <CustomImage classList='!absolute duration-300 category-icon top-0 bottom-0 right-0 left-0 m-auto' src={`${API}/file/${item.icon}`} alt='img' W={100} H={100} />
        </div>
        <div className='py-[20px] px-[30px] bg-[#3B3B3B]'>
            <Heading>{item.name}</Heading>
        </div>
    </div>
  )
}

export default CategoryCard
