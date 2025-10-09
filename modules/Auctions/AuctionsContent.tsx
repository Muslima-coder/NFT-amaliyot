import { Auction2Type } from "@/@types/Auction2Type"
import { Button, CustomImage, Heading } from "@/components"
import AuctionCountdown from "@/components/AuctionCountdown"
import { API } from "@/hooks"
import { EyeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import { FC } from "react"

const AuctionsContent:FC<{auctions:Auction2Type}> = ({auctions}) => {
  const t = useTranslations("AuctionsContent")
  return (
    <section style={{backgroundImage: `url(${API}/file/${auctions.nft.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundAttachment:"fixed"}} className="py-[80px] flex items-end relative h-[660px]">
        <div className="containers !w-full flex flex-wrap gap-5 justify-between items-center AuctionCountdown">
            <div>
                <button className="mb-[30px] flex items-center gap-[12px] text-white bg-[#3B3B3B] py-[20px] px-[20px] rounded-[20px]">
                    <CustomImage src={`${API}/file/${auctions.nft.creator.image}`} alt="img" W={24} H={24}/>
                    {auctions.nft.creator.username}
                </button>
                <Heading classList="!mb-[30px]">{auctions.nft.title}</Heading>
                <Button classList="!absolute md:left-auto md:right-auto flex justify-center md:bottom-18 bottom-5 left-5 right-5 !bg-white !text-black !px-[50px]" icon={<EyeIcon/>} iconPosition="left">{t("button")}</Button>
            </div>
            <AuctionCountdown/>
        </div>
    </section>
  )
}

export default AuctionsContent