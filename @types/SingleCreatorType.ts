import { CollectionType } from "./CollectionType";

export interface CreatedNFTType {
    image: string;
    title: string;
    price?: number;
}

export interface SingleCreatorType {
    id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    role: string;
    bio: string;
    globeAccLink: string;
    discordAccLink: string;
    youtubeAccLink: string;
    twitterAccLink: string;
    instagramAccLink: string;
    createdAt: string;
    updatedAt: string;
    createdNFTs: CreatedNFTType[]; 
    ownedNFTs: any[];
    collections: CollectionType[];
    auctionResults: any[];
}
