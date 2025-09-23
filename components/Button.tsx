import { FC, MouseEventHandler, ReactNode } from "react"

    interface ButtonType {
        classList?:string,
        iconPosition?: "left" | "right",
        children:ReactNode,
        icon?:ReactNode,
        onClick?:MouseEventHandler<HTMLButtonElement>
    }

  const Button:FC<ButtonType> = ({classList, iconPosition, icon, children, onClick}) => {
  return (
    <button onClick={onClick} className={`${classList} bg-[#A259FF] border-[2px] border-[#A259FF] hover:text-[#A259FF] duration-500 hover:bg-transparent cursor-pointer text-white font-semibold text-[16px] py-[19px] px-[30px] rounded-[20px] flex items-center gap-[12px]`}>
        {iconPosition == "left" && icon && icon}
        {children}
        {iconPosition == "right" && icon && icon}
    </button>
  )
}

export default Button