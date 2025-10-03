import { NFTType } from "./NFTType";

export interface Auction2Type {
    id:string,
    description:string,
    details:string[],
    tags:string,
    endsAt: string,
    createdAt:string,
    updatedAt:string,
    nftId:string,
    nft:NFTType,
    results:any[],
}