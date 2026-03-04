import Hero from "@/app/_components/hero";
import ScrunchiesList from "@/app/_components/scrunchies-list";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrunchiesList />
      <ScrollToTop />
    </>
  );
}
