import { CustomImage } from "@/components"
import Link from "next/link"

const Header = () => {
  const LinkStyle = ({title, href}: {title:string, href:string}) => {
    return(
      <Link className="font-semibold text-[16px] text-white hover:text-[#A259FF] duration-500" href={href}>{title}</Link>
    )
  }

  return (
    <header className="px-[50px] py-[20px] flex justify-between items-center">
      <Link href={"/"}>
      <CustomImage src="/site-logo.svg" alt="logo" W={243} H={32}/>
      </Link>

      <div>
      <LinkStyle href="/marketplace" title="Marketplace"/>
      <LinkStyle href="/rankings" title="Rankings"/>
      <LinkStyle href="/connect-a-wallet" title="Connect a wallet"/>
      </div>
    </header>

    
  )
}

export default Header