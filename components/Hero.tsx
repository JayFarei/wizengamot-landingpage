import Image from "next/image";
import type { CSSProperties } from "react";

const outerCouncilSeats = [
  { angle: "10deg", color: "#d4a853", delay: "-4s", size: "9px" },
  { angle: "52deg", color: "#5bb3b3", delay: "-7s", size: "8px" },
  { angle: "98deg", color: "#d4a853", delay: "-10s", size: "10px" },
  { angle: "144deg", color: "#5bb3b3", delay: "-3s", size: "8px" },
  { angle: "196deg", color: "#5bb3b3", delay: "-8s", size: "9px" },
  { angle: "244deg", color: "#d4a853", delay: "-6s", size: "10px" },
  { angle: "302deg", color: "#5bb3b3", delay: "-9s", size: "8px" },
  { angle: "332deg", color: "#d4a853", delay: "-5s", size: "9px" },
];

const innerCouncilSeats = [
  { angle: "22deg", color: "#5bb3b3", delay: "-6s", size: "7px" },
  { angle: "74deg", color: "#d4a853", delay: "-2s", size: "8px" },
  { angle: "126deg", color: "#5bb3b3", delay: "-9s", size: "7px" },
  { angle: "178deg", color: "#d4a853", delay: "-4s", size: "8px" },
  { angle: "230deg", color: "#d4a853", delay: "-7s", size: "7px" },
  { angle: "284deg", color: "#5bb3b3", delay: "-3s", size: "8px" },
  { angle: "336deg", color: "#d4a853", delay: "-5s", size: "7px" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      <div className="hero-background" aria-hidden="true">
        <div className="council-core" />
        <div className="council-orbit council-orbit--outer">
          {outerCouncilSeats.map((seat, index) => (
            <span
              key={`outer-seat-${index}`}
              className="council-seat"
              style={
                {
                  "--seat-angle": seat.angle,
                  "--seat-color": seat.color,
                  "--seat-delay": seat.delay,
                  "--seat-size": seat.size,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="council-orbit council-orbit--inner">
          {innerCouncilSeats.map((seat, index) => (
            <span
              key={`inner-seat-${index}`}
              className="council-seat"
              style={
                {
                  "--seat-angle": seat.angle,
                  "--seat-color": seat.color,
                  "--seat-delay": seat.delay,
                  "--seat-size": seat.size,
                } as CSSProperties
              }
            />
          ))}
        </div>

        {/* Decorative shapes */}
        <div className="shape shape-diamond shape-drift-1 top-[18%] left-[12%]" />
        <div className="shape shape-triangle shape-drift-3 top-[28%] right-[15%]" />
        <div className="shape shape-diamond shape-drift-2 bottom-[28%] left-[18%]" />
        <div className="shape shape-triangle shape-drift-4 bottom-[35%] right-[10%]" />
        <div className="shape shape-diamond shape-drift-5 top-[42%] right-[25%]" />
        <div className="shape shape-triangle shape-drift-2 top-[62%] left-[8%]" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Banner Image */}
        <div className="w-full max-w-5xl mb-8">
          <Image
            src="/banner.jpg"
            alt="Wizengamot - Council, Summariser, Visualiser, Podcast"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Tagline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 text-wizengamot-light">
          A Personal Agentic Sounding Board.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-wizengamot-muted text-center max-w-2xl mb-10 leading-relaxed">
          Enhance your thinking with AI-powered agents for deliberation,
          synthesis, visualization, and audio generation. A unique platform for
          deep work and creative exploration.
        </p>

        {/* CTA Button */}
        <a
          href="https://github.com/jayfarei/wizengamot/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-wizengamot-light text-wizengamot-dark font-semibold rounded-full hover:bg-white transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Get Started on GitHub
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
