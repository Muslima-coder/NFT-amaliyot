import { CustomImage, Heading, SendEmail, Text } from "@/components"
import { useTranslations } from "next-intl"

const WeeklyDigest = () => {
    const t = useTranslations("WeeklDigestContent")
  return (
    <section className="py-[80px]">
        <div className="containers ">
            <div className=" p-[60px] rounded-[20px] bg-[#3B3B3B] flex items-center md:justify-between flex-wrap justify-center">
            <CustomImage classList="!rounded-[20px]" src="/WeeklyDigestImg.png" alt="img" W={425} H={310}/>
            <div className="w-[420px]">
                <Heading classList="!mb-[10px]" tag="h2">{t("title")}</Heading>
                <Text classList="!mb-[40px]">{t("description")}</Text>
                <SendEmail/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default WeeklyDigest