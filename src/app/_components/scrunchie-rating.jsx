import scrunchiesData from "@/utils/json/scrunchies.json";
import Image from "next/image";
import RatingColumn from "./rating-column";

const MOST_LIKED_IMAGES = [
  "/2020/vichy blue.jpg",
  "/2020/vichy violet.jpg",
  "/2020/blue leaf 25.jpg",
  "/2020/little pink.jpg",
  "/2020/Blue Petals.jpg",
];

const MOST_SOLD_IMAGES = [
  "/2020/Pluto.jpg",
  "/2020/Satin charmeuse navyblue.jpg",
  "/2020/daisy white.jpg",
  "/2020/lemon3.jpg",
  "/2020/Pinky Glitter.jpg",
];

const pickItems = (imageList) =>
  imageList
    .map((img) => scrunchiesData["2020"].find((s) => s.image === img))
    .filter(Boolean);

const ScrunchieRating = () => {
  const mostLiked = pickItems(MOST_LIKED_IMAGES);
  const mostSold = pickItems(MOST_SOLD_IMAGES);

  return (
    <section>
      <div className="container mx-auto px-4 max-w-6xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RatingColumn title="Most liked scrunchies" items={mostLiked} />
          <RatingColumn title="Most sold scrunchies" items={mostSold} />
          <div className="shadow-lg shadow-black/15 h-125 relative overflow-hidden">
            <Image
              src="/Feedback.jpg"
              alt="Customer feedback"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrunchieRating;
