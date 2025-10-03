import { CategoryType } from "@/@types/CategoryType"
import { Heading } from "@/components"
import CategoryCard from "@/components/CategoryCard"
import { useTranslations } from "next-intl"
import { FC } from "react"

const CategoriesContent:FC<{categories:CategoryType[]}> = ({categories}) => {
  const t = useTranslations("CategoriesContent")
  return (
    <section className="py-[80px]">
        <div className="containers">
            <Heading classList="!mb-[60px]" tag="h2">{t("title")}</Heading>
            <div className="flex justify-between gap-[30px] flex-wrap">
                {categories.map(item => <CategoryCard key={item.id} item={item}/>)}
            </div>
        </div>
    </section>
  )
}

export default CategoriesContent