import Hero from "@/app/_components/hero";
import ScrunchieList from "@/app/_components/scrunchie-list";
import ScrunchieRating from "@/app/_components/scrunchie-rating";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrunchieList />
      <ScrunchieRating />
      <ScrollToTop />
    </>
  );
}
