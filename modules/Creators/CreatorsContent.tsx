import { CreatorType } from "@/@types/CreatorType"
import { Button, Heading, Text, CreaterCard } from "@/components"
import { RocketIcon } from "@/icons"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { FC } from "react"

const CreatorsContent:FC<{creators:CreatorType[]}> = ({creators}) => {
  const t = useTranslations('TopCreators')

  return (
    <section className="py-[80px] relative">
        <div className="containers  ">
          <div className="flex items-center justify-between mb-[60px]">
            <div>
              <Heading tag="h2">{t('title')}</Heading>
              <Text>{t('description')}</Text>
            </div>
            <Link href={`/rangkings`}>
            <Button classList="!absolute md:right-25 md:left-auto md:bottom-auto bottom-0 right-4 left-4 flex justify-center" icon={<RocketIcon/>} iconPosition="left">{t('button')}</Button>
            </Link>
          </div>
          <div className="flex md:justify-between justify-center flex-wrap gap-[20px]">
            {creators.map((item, index) => <Link key={item.id} href={`/creator/${item.id}`}><CreaterCard  item={item} index={index}/></Link>)}
          </div>
        </div>
    </section>
  )
}

export default CreatorsContent