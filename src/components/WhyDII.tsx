import { diiPortfolio } from "@/data/portfolio-data";

export default function WhyDII() {
  const { whyDii } = diiPortfolio;
  return (
    <section id="why-dii" className="border-t border-[#e2e8f0] bg-[#1a1f2c] px-5 py-20 text-white sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div><p className="text-xs font-semibold text-[#fb923c]">04 / THE ALIGNMENT</p><h2 className="mt-6 font-display text-5xl font-bold sm:text-6xl">{whyDii.title}</h2></div>
        <div>
          <blockquote className="border-l-2 border-[#ea580c] pl-6 text-xl leading-9 text-white/90 sm:pl-9 sm:text-3xl sm:leading-[1.55]">“{whyDii.body}”</blockquote>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-3">
            {whyDii.pillars.map((pillar, index) => <div key={pillar} className="bg-[#1a1f2c] p-5"><p className="text-[10px] font-bold text-[#fb923c]">0{index + 1}</p><p className="mt-2 text-sm font-medium text-white/75">{pillar}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

