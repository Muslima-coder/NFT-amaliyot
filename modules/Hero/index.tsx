import { getRequest } from '@/server/getRequest'
import HeroContent from './HeroContent'

const Hero = async () => {
  const auctions = await getRequest('/auctions')
  const artist = await getRequest("/user?role=ARTIST")
  const totalSale = await getRequest("/auction-result")

  return <HeroContent artists={artist.data ? artist.data : []} totalSale={totalSale.data ? totalSale.data : []} auctions={auctions.data ? auctions.data : []}/>
}

export default Hero