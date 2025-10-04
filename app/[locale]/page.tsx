import { Auctions, Categories, Collections, Creators, Hero, NFT, WeeklyDigest, Works } from "@/modules";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Collections/>
      <Creators/>
      <Categories/>
      <NFT/>
      <Auctions/>
      <Works/>
      <WeeklyDigest/>
    </main>
  );
}
