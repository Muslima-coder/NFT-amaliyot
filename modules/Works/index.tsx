import { CustomImage, Heading, Text } from "@/components"
import { useTranslations } from "next-intl"

const Works = () => {
    const t = useTranslations("WorksContent")
    const CustomCard = ({src, cardTitle, cardText} : {src:string, cardTitle:any, cardText:any}) => {
        return(
            <div className="w-[330px]  px-[30px] pt-[10px] pb-[30px] rounded-[20px] bg-[#3B3B3B]">
                <CustomImage classList="mx-auto mb-[20px]" src={src} alt="img" W={250} H={250}/>
                <div className="text-center flex flex-col gap-[10px]">
                    <Heading classList="!leading-[160%] !line-clamp-1 !font-normal">{cardTitle}</Heading>
                    <Text>{cardText}</Text>
                </div>
            </div>
        )
    }
    
  return (
    <section className="py-[80px]">
       <div className="containers">
         <div className="mb-[48px]">
            <Heading classList="!mb-[10px]" tag="h2">{t("title")}</Heading>
            <Heading classList="!leading-[160%] !font-normal">{t("description")}</Heading>
        </div>
        <div className="flex items-center justify-between">
            <CustomCard src="/WorksImg1.png" cardTitle={t("cardTitle1")} cardText={t("cardText1")}/>
            <CustomCard src="/WoksImg2.png" cardTitle={t("cardTitle2")} cardText={t("cardText2")}/>
            <CustomCard src="/WorksImg3.png" cardTitle={t("cardTitle3")} cardText={t("cardText3")}/>
        </div>
       </div>
    </section>
  )
}

export default Works