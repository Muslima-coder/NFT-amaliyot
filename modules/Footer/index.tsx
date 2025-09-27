import { CustomImage, Heading, SendEmail, Text,  } from "@/components"
import { DiscordIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactNode } from "react"

const Footer = () => {
  const t = useTranslations("FooterContent")

  const mediaList = [<DiscordIcon/>, <YouTubeIcon/>, <TwitterIcon/>, <InstagramIcon/>]
  return (
    <div className="py-[40px] !px-[80px] bg-[#3B3B3B]  w-full">
      <div className="containers">
        <div className="flex lg:flex-row flex-col justify-between">
            <div className="w-[243px]">
              <Link className="mb-[30px] inline-block" href={"/"}>
                  <CustomImage src="/site-logo.svg" alt="logo" W={243} H={32}/>          
              </Link>
              <Text classList="mb-[20px]">{t("text1")}</Text>
              <Text classList="mb-[15px]">{t("text2")}</Text>
              <div className="flex items-center gap-[10px]">
                  {mediaList.map((item:ReactNode, index:number) => <Link className="text-[#858584] hover:text-[#A259FF] duration-500 hover:scale-[1.1]" key={index + 1} href={'/'}>{item}</Link>)}
              </div>
            </div>

            <div className="w-[135px]">
              <Heading classList="mb-[25px]">Explore</Heading>
              <Link href={"/marketplace"}><Text classList="mb-[20px] hover:text-[#A259FF] duration-500">{t("marketplace")}</Text></Link>
              <Link href={"/rangkings"}><Text classList="mb-[20px] hover:text-[#A259FF] duration-500">{t("rankings")}</Text></Link>
              <Link href={"/connect-a-wallet"}><Text classList="mb-[20px] hover:text-[#A259FF] duration-500">{t("connectWallet")}</Text></Link>
            </div>

            <div className="w-[420px]">
              <Heading classList="mb-[25px]">{t("text3")}</Heading>
              <Text classList="mb-[20px] w-[320px]">{t("text4")}</Text>
              <SendEmail/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer