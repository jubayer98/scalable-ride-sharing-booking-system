import CityRideLogo from "@/assets/icons/Logo";

export default function MeetTheTeam() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-zinc-400 text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <CityRideLogo width={160} height={80} className="mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Meet the Team
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
            The passionate minds driving CityRide’s mission of smarter and more
            sustainable urban mobility.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Sofia Martinez",
              role: "CEO & Founder",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "David Chen",
              role: "CTO",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Aisha Khan",
              role: "Head of Design",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Liam Patel",
              role: "Lead Engineer",
              img: "https://randomuser.me/api/portraits/men/12.jpg",
            },
            {
              name: "Emily Davis",
              role: "Community Manager",
              img: "https://randomuser.me/api/portraits/women/24.jpg",
            },
            {
              name: "Raj Singh",
              role: "Product Manager",
              img: "https://randomuser.me/api/portraits/men/56.jpg",
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
