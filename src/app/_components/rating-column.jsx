import Image from "next/image";

const RatingItem = ({ name, image, price }) => {
  return (
    <li className="pb-4">
      <div className="flex flex-row flex-nowrap items-center">
        <div>
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="pl-4 pt-2">
          <h3 className="text-base font-medium">{name}</h3>
          <span className="text-amber-500 text-xs">{price}</span>
        </div>
      </div>
    </li>
  );
};

const RatingColumn = ({ title, items, aosProps }) => {
  return (
    <div data-aos="fade-up" data-aos-easing="ease-in-out" {...aosProps}>
      <h2 className="relative pt-4 font-bold text-3xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-2 before:bg-pink-600">
        {title}
      </h2>
      <ul className="mt-8">
        {items.map((item, index) => (
          <RatingItem
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default RatingColumn;
