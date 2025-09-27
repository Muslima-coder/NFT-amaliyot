import { CreaterType } from "@/@types/CreatorType"
import { Button, Heading, Text, CreaterCard } from "@/components"
import { RocketIcon } from "@/icons"
import { useTranslations } from "next-intl"
import { FC } from "react"

const CreatorsContent:FC<{creators:CreaterType[]}> = ({creators}) => {
  const t = useTranslations('TopCreators')

  return (
    <section className="py-[80px]">
        <div className="containers">
          <div className="flex items-center justify-between mb-[60px]">
            <div>
              <Heading tag="h2">{t('title')}</Heading>
              <Text>{t('description')}</Text>
            </div>
            <Button icon={<RocketIcon/>} iconPosition="left">{t('button')}</Button>
          </div>
          <div className="flex justify-between flex-wrap">
              {creators.map((item, index) => <CreaterCard key={item.id} item={item} index={index}/>)}
          </div>
        </div>
    </section>
  )
}

export default CreatorsContent