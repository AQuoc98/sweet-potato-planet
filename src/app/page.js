export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-row flex-nowrap justify-center items-center h-125">
          <div className="flex flex-col items-center gap-4 px-4">
            <h1 className="p-4 mb-4 rounded font-bold text-white bg-red-400 text-4xl md:text-7xl shadow-[-1px_-5px_20px_0px_rgba(0,0,0,0.3)] animate-[rotateZoom_1s_ease-out_both]">
              Beautiful Scrunchie
            </h1>
            <h2 className="p-4 rounded text-white bg-yellow-400 text-2xl md:text-5xl font-bold shadow-[-1px_-5px_20px_0px_rgba(0,0,0,0.3)] animate-[animate_1s_ease-out_0.5s_both]">
              from the best tailor
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
