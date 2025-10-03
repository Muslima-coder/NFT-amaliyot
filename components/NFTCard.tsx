import { NFTType } from '@/@types/NFTType'
import { API } from '@/hooks'
import React, { FC } from 'react'
import CustomImage from './CustomImage'
import Heading from './Heading'
import Text from './Text'

const NFTCard:FC<{item: NFTType}> = ({item}) => {
  return (
    <div className='w-[330px] nft-wrapper cursor-pointer rounded-[20px] overflow-hidden '>
        <div className='w-[330px] overflow-hidden h-[296px]'>
            <CustomImage classList="!duration-300" src={`${API}/file/${item.image}`} alt="image" W={330} H={330}/>
        </div>
        <div className='py-[20px] px-[30px] bg-[#3B3B3B]'>
            <Heading classList='!mb-[5px]'>{item.title}</Heading>
            <div className='flex items-center gap-[12px]'>
                <CustomImage classList="!rounded-full" src={`${API}/file/${item.creator.image}`} alt="image" W={24} H={24}/>
                <Text>{item.creator.username}</Text>
            </div>
            <div className='flex justify-between mt-[25px]'>
                <div>
                    <Text classList='!text-[#858584] !text-[25px]'>Price</Text>
                    <Text>{item.price}</Text>
                </div>
                <div className='text-end'>
                    <Text classList='!text-[#858584] !text-[25px]'>Highest Bid</Text>
                    <Text>0.33 wETH</Text>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTCard
