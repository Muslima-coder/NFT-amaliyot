import { FC, ReactNode } from "react"

interface TextType {
  classList?:string,
  children:ReactNode
}

const Text:FC<TextType> = ({classList, children}) => {
  return (
    <p className={`${classList} text-[16px] text-[#CCCCCC]`}>{children}</p>
  )
}

export default Text