import { API } from "@/hooks"
import CustomImage from "./CustomImage"
import Heading from "./Heading"
import Text from "./Text"
import { FC } from "react"
import { CollectionType } from "@/@types/CollectionType"

const CollectionCard:FC<{item:CollectionType}> = ({item}) => {
  return (
    <div className="w-full sm:w-[330px] cursor-pointer">
      <div className="w-full sm:w-[330px] sm:h-[330px] rounded-[20px] duration-300 overflow-hidden collection-img-wrapper">
        <CustomImage classList="!mx-auto !duration-300"  src={`${API}/file/${item.images[0]}`} alt="image" W={330} H={330}/>
      </div>
      <div className="flex justify-between mt-[15px]">
            <div className="w-[30%] sm:h-[100px] rounded-[20px] duration-300 overflow-hidden collection-img-wrapper">
              <CustomImage classList="!w-full !duration-300"  src={`${API}/file/${item.images[1]}`} alt="image" W={100} H={100}/>
            </div>
            <div className="w-[30%] sm:h-[100px] rounded-[20px] duration-300 overflow-hidden collection-img-wrapper">
              <CustomImage classList="!w-full !duration-300"  src={`${API}/file/${item.images[2]}`} alt="image" W={100} H={100}/>
            </div>
            <button className="w-[30%] sm:h-[100px] rounded-[20px] bg-[#A259FF] text-white flex items-center justify-center font-bold text-[22px]">{item.images.length}+</button>
      </div>
        <div className="mt-[15px]">
            <Heading classList="!mb-[10px]" tag="h3">{item.title}</Heading>
            <div className="flex items-center gap-[12px]">
              <CustomImage src={`${API}/file/${item.creator.image}`} alt="image" W={24} H={24}/>
              <Text classList="!font-normal">{item.creator.username}</Text>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard