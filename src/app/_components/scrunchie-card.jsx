import Image from "next/image";

const ScrunchieCard = ({ name, image, price }) => {
  return (
    <div className="relative group">
      <Image
        src={image}
        alt={name}
        width={400}
        height={350}
        className="w-full h-86 object-cover"
      />
      <div className="absolute bottom-0 w-9/12 bg-orange-400">
        <div className="px-6 py-4">
          <h3 className="text-white font-semibold">{name}</h3>
          <div className="text-white text-xs">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ScrunchieCard;
