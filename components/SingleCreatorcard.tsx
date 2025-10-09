'use client'

import { useState } from "react"
import CustomImage from "./CustomImage"
import Heading from "./Heading"
import Text from "./Text"
import { SingleCreatorType } from "@/@types/SingleCreatorType"
import { useTranslations } from "next-intl"
import SingleCollectionCard from "./SingleCollectionCard"

const SingleCreatorCard = ({ singleData }: { singleData: SingleCreatorType }) => {

  const [activeTab, setActiveTab] = useState<'created' | 'owned' | 'collection'>('created')

  const getNFTs = () => {
    if (activeTab === 'created') return singleData.createdNFTs
    if (activeTab === 'owned') return singleData.ownedNFTs
    if (activeTab === 'collection') return singleData.collections
    return []
  }
  
  const t = useTranslations("SingleCreatorContent")

  return (
    <div>
      <div className='containers  flex items-center justify-between'>
        {['created', 'owned', 'collection'].map(tab => (
        <div
          key={tab}
          onClick={() => setActiveTab(tab as 'created' | 'owned' | 'collection')}
          className={`flex w-[300px] py-[24px] cursor-pointer hover:scale-[1.1] duration-500 gap-[16px] items-center justify-center ${
            activeTab === tab ? '!text-white border-b-[1px] border-b-white' : '!text-[#858584]'}`}>
          <p className='!text-[22px] !font-semibold'>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </p>
          <button className={`px-[10px] py-[5px] duration-500 border-none rounded-[20px] text-white ${
            activeTab === tab ? 'bg-[#858584]' : 'bg-[#3B3B3B]'
          }`}>
            {tab === 'created' ? singleData.createdNFTs.length :
            tab === 'owned' ? singleData.ownedNFTs.length :
            singleData.collections.length}
          </button>
        </div>
        ))}

      </div>
       
      <div className="bg-[#3B3B3B] w-full py-[80px] flex items-center justify-between flex-wrap">
        <div className="containers w-full">
         {activeTab === 'collection'
            ? singleData.collections.map((collection, index) => (
                <SingleCollectionCard key={index} item={collection} />
              )) 
              :getNFTs().map((nft, index) => (
              <div key={index} className='w-[330px] nft-wrapper cursor-pointer rounded-[20px] overflow-hidden'>
                <div className='w-[330px] overflow-hidden h-[296px]'>
                  <CustomImage classList="!duration-300" src={`${process.env.NEXT_PUBLIC_API}/file/${nft.image}`} alt={nft.title || 'NFT'} W={330} H={330}/>
                </div>
                <div className='py-[20px] px-[30px] bg-[#2B2B2B]'>
                  <Heading classList='!mb-[5px]'>{nft.title}</Heading>
                  <div className='flex items-center gap-[12px]'>
                    <CustomImage classList="!duration-300" src={`${process.env.NEXT_PUBLIC_API}/file/${singleData?.image}`} alt={nft.title} W={24} H={24}/>
                    <Text>{singleData.username}</Text>
                  </div>
                  <div className='flex justify-between mt-[25px]'>
                    <div>
                      <Text classList='!text-[#858584] !text-[12px]'>{t("price")}</Text>
                      <Text>{nft.price}</Text>
                    </div>
                    <div className='text-end'>
                      <Text classList='!text-[#858584] !text-[12px]'>{t("highestBid")}</Text>
                      <Text>0.33 wETH</Text>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default SingleCreatorCard