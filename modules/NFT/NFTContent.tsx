import { NFTType } from "@/@types/NFTType"
import { Button, Heading } from "@/components"
import NFTCard from "@/components/NFTCard"
import { EyeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import { FC } from "react"

const NFTContent:FC<{nft: NFTType[]}> = ({nft}) => {
    const t = useTranslations("NFTContent")
  return (
    <section className="py-[80px]">
        <div className="containers">
            <div className="flex items-center justify-between mb-[60px]">
                <div>
                    <Heading classList="!mb-[10px]" tag="h2">{t("title")}</Heading>
                    <Heading classList="!font-normal">{t("description")}</Heading>
                </div>
                <Button classList="!px-[50px]" icon={<EyeIcon/>} iconPosition="left">{t("button")}</Button>
            </div>
            <div className="flex items-center justify-between">
                {nft.map(item => <NFTCard key={item.id} item={item}/>)}
            </div>
        </div>
    </section>
  )
}

export default NFTContent