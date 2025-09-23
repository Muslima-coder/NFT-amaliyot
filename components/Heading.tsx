import { FC, ReactNode } from "react"

interface HeadingType {
    tag?: "h1" | "h2" | "h3" | "h4",
    children:ReactNode,
    classList?:string
}

const Heading:FC<HeadingType> = ({tag, children, classList}) => {
    if(tag == "h1"){
        return <h1 className={`${classList} font-semibold text-white text-[67px] `}>{children}</h1>
    }
    else if(tag == "h2"){
        return <h2 className={`${classList} font-semibold text-white text-[38px] `}>{children}</h2>
    }
    else if(tag == "h3"){
        return <h3 className={`${classList} font-semibold text-white text-[22px] `}>{children}</h3>
    }
    else if(tag == "h4"){
        return <h4 className={`${classList} font-semibold text-white text-[16px] `}>{children}</h4>
    }
    else{
        return <strong className={`${classList} font-semibold text-white text-[22px] inline-block `}>{children}</strong>
    }
}

export default Heading