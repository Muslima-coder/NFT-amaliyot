import { SingleCreatorType } from '@/@types/SingleCreatorType'
import { Button, CustomImage, Heading,  Text } from '@/components'
import SingleCreatorCard from '@/components/SingleCreatorcard'
import { BrowserIcon, CopyIcon, DiscordIcon, InstagramIcon, PlusIcon, TwitterIcon, YouTubeIcon } from '@/icons'
import { getRequest } from '@/server/getRequest'
import { getTranslations } from 'next-intl/server'
import { FC } from 'react'

const SingleCreator:FC<{params: {id: string}}> = async ({params}) => {
    const {id} = await params 
    const singleData: SingleCreatorType = await getRequest(`/user/${id}`)
     const t = await getTranslations('SingleCreatorContent')

     console.log(singleData)

  return (
    <section className='py-1'>
      <div className='single-creator-wrapper w-full relative mb-[50px]'>
        <div className='containers'>
        <CustomImage classList='!absolute !bottom-[-50px] md:left-auto md:right-auto left-0 right-0 md:mx-0 mx-auto rounded-[20px]' src={`${process.env.NEXT_PUBLIC_API}/file/${singleData?.createdNFTs[0].image}`} W={120} H={120} alt='image'/>
        </div>
      </div>

      <div className='border-b-[1px] border-b-[#3B3B3B] '>
        <div className='containers !py-[40px]'>
        <div className='flex md:flex-row flex-col items-center justify-between mb-[30px]'>
          <Heading classList='!text-[51px]'>{singleData.username}</Heading>
          <div className='flex md:flex-row flex-col items-center gap-[20px]'>
            <Button classList='md:w-auto w-[355px] flex items-center justify-center' icon={<CopyIcon/>} iconPosition='left'> {singleData.id.slice(0, 10)}</Button>
            <Button classList='md:w-auto w-[355px] flex items-center justify-center' icon={<PlusIcon/>} iconPosition='left'>{t("follow")}</Button>
          </div>
        </div>

        <div className='flex items-center gap-[20px] mb-[30px]'>
        <div className='w-[156px]'>
          <Heading classList='!text-[28px]'>350k +</Heading>
          <Text classList='!text-[22px] !font-semibold'>Volume</Text>
        </div>
        <div className='w-[156px]'>
          <Heading classList='!text-[28px]'>350k +</Heading>
          <Text classList='!text-[22px] !font-semibold'>NFTs Sold</Text>
        </div>
        <div className='w-[156px]'>
          <Heading classList='!text-[28px]'>350k +</Heading>
          <Text classList='!text-[22px] !font-semibold'>Followers</Text>
        </div>
        </div>

        <div className='!mb-[30px]'>
          <Text classList='!text-[22px] !font-semibold !text-[#858584] mb-[10px]'>{t("bio")}</Text>
          <Text classList='!text-[22px] !font-semibold'>{singleData.bio}</Text>
        </div>

        <div>
          <Text classList='!text-[22px] !font-semibold !text-[#858584] mb-[10px]'>{t("links")}</Text>
          <div className='flex items-center gap-[10px]'>
            <a target='_blank' className=' text-[#858584] hover:text-[#A259FF] duration-500' href={singleData.globeAccLink}><BrowserIcon/></a>
            <a target='_blank' className=' text-[#858584] hover:text-[#A259FF] duration-500' href={singleData.discordAccLink}><DiscordIcon/></a>
            <a target='_blank' className=' text-[#858584] hover:text-[#A259FF] duration-500' href={singleData.youtubeAccLink}><YouTubeIcon/></a>
            <a target='_blank' className=' text-[#858584] hover:text-[#A259FF] duration-500' href={singleData.twitterAccLink}><TwitterIcon/></a>
            <a target='_blank' className=' text-[#858584] hover:text-[#A259FF] duration-500' href={singleData.instagramAccLink}><InstagramIcon/></a>
          </div>
        </div>
      </div>
      </div>
      <SingleCreatorCard singleData={singleData} />
    </section>  
  )
}

export default SingleCreator
