import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="py-15 text-center">
        <h1 className="inline-block rounded p-4 bg-pink-600 text-white text-4xl md:text-7xl font-bold shadow-[0px_90px_100px_rgba(0,0,0,0.4)] animate-[zoomIn_0.75s_linear_both]">
          About us
        </h1>
      </section>
      <section className="py-15 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="flex flex-col gap-8"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-delay="0"
            >
              <h2 className="text-3xl md:text-5xl font-semibold">
                Sweet Potato Planet
              </h2>
              <div className="space-y-1 text-gray-500 leading-relaxed">
                <p>𝓗𝓪𝓷𝓭𝓶𝓪𝓭𝓮</p>
                <p>🌱 Sảη ρнẩм ηнà ℓαηg тự тαү ℓàм 🌱</p>
                <p>📍LANG chỉ bán online</p>
                <p>📍LANG ở TP. HCM</p>
                <div className="flex items-center gap-4 mt-4 md:hidden">
                  <a
                    href="https://www.instagram.com/sweetpotato_planet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="#E1306C" />
                  </a>
                  <a
                    href="https://www.facebook.com/Sweetpotato.Handmade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook color="#E1306C" />
                  </a>
                </div>
                <p className="items-center flex-wrap gap-2 md:flex hidden">
                  <Instagram size={16} />
                  <a
                    href="https://www.instagram.com/sweetpotato_planet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 transition-colors"
                  >
                    https://www.instagram.com/sweetpotato_planet/
                  </a>
                </p>
                <p className="items-center flex-wrap gap-2 md:flex hidden">
                  <Facebook size={16} />
                  <a
                    href="https://www.facebook.com/Sweetpotato.Handmade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 transition-colors"
                  >
                    https://www.facebook.com/Sweetpotato.Handmade
                  </a>
                </p>
              </div>
            </div>
            <Image
              src="/logo.jpg"
              alt="Sweet Potato Planet"
              width={600}
              height={600}
              className="w-full align-middle"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay="150"
            />
          </div>
        </div>
      </section>
    </>
  );
}
