
import Image from 'next/image'

function HeroSection() {

  return (
    <section className="bg-gray-100 py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/18c43266-03ce-4e83-bd62-6e3ee73d0ba5/original=true,quality=90/00139-anime_fl_Flux_fp8nf4-1647395274.jpeg"
              alt="App Store"
              width={450}
              height={450}
              className="rounded-lg max-h-52 w-full object-cover shadow-lg hover:shadow-2xl transition duration-300" 
            />
          </div>

          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">
              Discover the Best Apps & Games
            </h1>
            <p className="text-gray-600 mb-8">
              Find the best apps and games for your device. We have a collection of over 10,000 apps and games for you to choose from.
            </p>
            <a href="#topapps" className="bg-fuchsia-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-fuchsia-700 transition duration-300">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
