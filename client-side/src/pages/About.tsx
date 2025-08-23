import CityRideLogo from "@/assets/icons/Logo";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-zinc-400 text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <CityRideLogo width={180} height={90} className="mx-auto mb-8" />

          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            About CityRide
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
            CityRide is transforming the way people move through their cities.
            With a focus on smart, eco-friendly, and accessible mobility, we
            connect communities and create a more sustainable urban future.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Founded with a vision to reshape urban transportation, CityRide
            bridges the gap between convenience and sustainability. Our platform
            empowers people to choose efficient, eco-conscious rides that make
            daily commutes easier while reducing environmental impact.
          </p>

          <p>
            By combining modern technology with community-driven design, we are
            building a smarter way to navigate cities. Whether it’s a quick trip
            downtown or a regular commute, CityRide ensures every journey is
            seamless, reliable, and sustainable.
          </p>

          <p>
            CityRide isn’t just about moving people from one place to another —
            it’s about building greener, healthier, and more connected urban
            environments for the future.
          </p>
        </div>
      </section>
    </div>
  );
}
