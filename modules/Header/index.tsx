import { Button, CustomImage } from "@/components"
import { SignUpIcon } from "@/icons"
import Link from "next/link"

const Header = () => {
  const LinkStyle = ({title, href}: {title:string, href:string}) => {
    return(
      <Link className="font-semibold text-[16px] text-white hover:text-[#A259FF] duration-500" href={href}>{title}</Link>
    )
  }

  return (
    <header className="px-[40px] py-[20px]">
      <div className="containers  flex justify-between items-center">
      <Link href={"/"}>
      <CustomImage src="/site-logo.svg" alt="logo" W={243} H={32}/>
      </Link>

      <div className="flex items-center gap-[30px]">
      <LinkStyle href="/marketplace" title="Marketplace"/>
      <LinkStyle href="/rankings" title="Rankings"/>
      <LinkStyle href="/connect-a-wallet" title="Connect a wallet"/>
      <Button icon={<SignUpIcon/>} iconPosition="left">Sign Up</Button>
      </div>
      </div>
    </header>

    
  )
}

export default Header