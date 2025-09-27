import { API } from "@/hooks"
import CustomImage from "./CustomImage"
import Heading from "./Heading"
import Text from "./Text"
import { FC } from "react"
import { CreaterType } from "@/@types/CreatorType"

const CreaterCard:FC<{item:CreaterType, index:number}> = ({item, index}) => {
  return (
    <div className="w-[240px] relative bg-[#3B3B3B] text-center rounded-[20px] p-[20px]">
        <CustomImage classList="!mb-[20px] !mx-auto" src={`${API}/file/${item.image}`} alt="image" W={120} H={120}/>
        <Heading classList="!mb-[50px]" tag="h3">{item.username}</Heading>
        <Text classList="!text-[16px]"><span className="text-[#858584]">Total Sales:</span>34.53 ETH</Text>
        <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#2B2B2B] rounded-full font-normal text-[16px] text-[#858584] absolute top-[18px] left-[20px]">{index + 1}</button>
    </div>
  )
}

export default CreaterCard