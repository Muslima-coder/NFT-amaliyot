import React from 'react'
import HeroContent from './HeroContent'
import getRequest from '@/server/getRequest'

const Hero = () => {
  const auctions = await getRequest("/auctions")
  const artist = await getRequest("/user?role-ARTIST")
  const totalSale = await getRequest("/auction-result")

  return <HeroContent artists={artist.data} totalSale={totalSale} auctions={auctions.data}/>
}

export default Hero