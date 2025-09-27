import { CollectionType } from "@/@types/CollectionType"
import {  Heading, Text,  CollectionCard } from "@/components"
import { useTranslations } from "next-intl"
import { FC } from "react"

const CollectionsContent:FC<{collections:CollectionType[]}> = ({collections}) => {
  const t = useTranslations('TrendingCollection')

  return (
    <section className="py-[80px]">
        <div className="containers">
              <Heading classList="!mb-[10px] !text-[28px] sm:!text-[38px]" tag="h2">{t('title')}</Heading>
              <Text classList="!text-[16px] lg:!text-[22px] !mb-[40px] lg:!mb-[60px]">{t('description')}</Text>
              <div className="flex justify-center gap-[30px] lg:gap-0 lg:justify-between !flex-wrap">
                  {collections.map(item => <CollectionCard key={item.id} item={item}/>)}
              </div>
          </div>
    </section>
  )
}

export default CollectionsContent