import { Auctions, Categories, Collections, Creators, Hero, NFT } from "@/modules";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Collections/>
      <Creators/>
      <Categories/>
      <NFT/>
      <Auctions/>
    </main>
  );
}
