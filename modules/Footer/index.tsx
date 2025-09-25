import { CustomImage, Heading, SendEmail, Text,  } from "@/components"
import { DiscordIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "@/icons"
import Link from "next/link"
import { ReactNode } from "react"

const Footer = () => {
  const mediaList = [<DiscordIcon/>, <YouTubeIcon/>, <TwitterIcon/>, <InstagramIcon/>]
  return (
    <div className="py-[40px] !px-[80px] bg-[#3B3B3B] absolute bottom-0 w-full">
      <div className="containers">
        <div className="flex lg:flex-row flex-col justify-between">
            <div className="w-[243px]">
              <Link className="mb-[30px] inline-block" href={"/"}>
                  <CustomImage src="/site-logo.svg" alt="logo" W={243} H={32}/>          
              </Link>
              <Text classList="mb-[20px]">NFT marketplace UI created with Anima for Figma.</Text>
              <Text classList="mb-[15px]">Join our community</Text>
              <div className="flex items-center gap-[10px]">
                  {mediaList.map((item:ReactNode, index:number) => <Link className="text-[#858584] hover:text-[#A259FF] duration-500 hover:scale-[1.1]" key={index + 1} href={'/'}>{item}</Link>)}
              </div>
            </div>

            <div className="w-[133px]">
              <Heading classList="mb-[25px]">Explore</Heading>
              <Link href={"/marketplace"}><Text classList="mb-[20px]">Marketplace</Text></Link>
              <Link href={"/rangkings"}><Text classList="mb-[20px]">Rankings</Text></Link>
              <Link href={"/connect-a-wallet"}><Text classList="mb-[20px]">Connect a wallet</Text></Link>
            </div>

            <div className="w-[420px]">
              <Heading classList="mb-[25px]">Join our weekly digest</Heading>
              <Text classList="mb-[20px] w-[320px]">Get exclusive promotions & updates straight to your inbox.</Text>
              <SendEmail/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer