import scrunchiesData from "@/utils/json/scrunchies.json";
import ScrunchieCard from "./scrunchie-card";

const ScrunchieList = () => {
  return (
    <section className="py-20">
      {Object.entries(scrunchiesData).map(([year, scrunchies]) => (
        <div key={year} className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="relative pt-4 font-bold text-3xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-2 before:bg-pink-600">
              {year}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scrunchies.map((scrunchie, index) => (
              <ScrunchieCard
                key={`${year}-${index}`}
                name={scrunchie.name}
                image={scrunchie.image}
                price={scrunchie.price}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ScrunchieList;
