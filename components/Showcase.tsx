import Image from "next/image";

export default function Showcase() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Decorative shapes */}
      <div className="shape shape-triangle shape-drift-3 top-[10%] left-[5%]" />
      <div className="shape shape-diamond shape-drift-2 top-[15%] right-[8%]" />
      <div className="shape shape-triangle shape-drift-4 bottom-[20%] right-[12%]" />
      <div className="shape shape-diamond shape-drift-5 bottom-[15%] left-[10%]" />

      <div className="relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-wizengamot-light italic">
          See it in Action
        </h2>

        {/* Showcase GIF */}
        <div className="max-w-4xl mx-auto">
          <div className="screenshot-frame relative bg-wizengamot-darker rounded-xl overflow-hidden">
            <Image
              src="/showcase.gif"
              alt="Wizengamot feature showcase - Council deliberation, Synthesizer notes, Visualiser diagrams, and Podcast generation"
              width={1100}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
