import { Button, CustomImage, LanguageConfig,  } from "@/components"
import { HamburgerIcon, SignUpIcon } from "@/icons"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ReactNode } from "react"

const Header = () => {
  const LinkStyle = ({children, href}: {children:ReactNode, href:string}) => {
    return(
      <Link className="font-semibold text-[16px] text-white hover:text-[#A259FF] duration-500" href={href}>{children}</Link>
    )
  }
  const t = useTranslations("headerContent")

  return (
    <header className="px-[40px] py-[20px]">
      <div className="containers  flex justify-between items-center">
      <Link href={"/"}>
      <CustomImage src="/site-logo.svg" alt="logo" W={243} H={32}/>
      </Link>

      <div className="lg:flex hidden items-center gap-[30px]">
      <LinkStyle href="/marketplace">{t("marketplace")}</LinkStyle>
      <LinkStyle href="/rangkings">{t("rankings")}</LinkStyle>
      <LinkStyle href="/connect-a-wallet">{t("connectWallet")}</LinkStyle>
      <Button icon={<SignUpIcon/>} iconPosition="left">{t("signUp")}</Button>
      <LanguageConfig/>
      </div>
      <div className="lg:hidden flex">
        <button>
          <HamburgerIcon/>
        </button>
      </div>
      </div>
    </header>

    
  )
}

export default Header