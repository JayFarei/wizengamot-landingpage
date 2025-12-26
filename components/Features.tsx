import FeatureCard from "./FeatureCard";

const CouncilIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    <circle cx="4" cy="9" r="2.5" />
    <path d="M1 19a4 4 0 0 1 6 0" />
    <circle cx="20" cy="9" r="2.5" />
    <path d="M17 19a4 4 0 0 1 6 0" />
  </svg>
);

const SynthesizerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="9" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <line x1="6.5" y1="6" x2="8" y2="6" />
    <line x1="6.5" y1="8" x2="8" y2="8" />
    <line x1="17.5" y1="6" x2="19" y2="6" />
    <line x1="17.5" y1="8" x2="19" y2="8" />
  </svg>
);

const VisualiserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const PodcastIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const features = [
  {
    icon: "/icons/council.png",
    title: "Council",
    description:
      "Multi-model deliberation with peer ranking. Get perspectives from multiple LLMs, see how they evaluate each other, and receive a synthesized answer.",
    features: ["Multiple Models", "Peer Review", "Synthesis"],
    svgIcon: <CouncilIcon />,
    accentColor: "#7c5cff",
    accentBg: "#7c5cff20",
  },
  {
    icon: "/icons/summariser.png",
    title: "Summariser",
    description:
      "Transform URLs into atomic Zettelkasten notes. Paste a YouTube video, article, or PDF, or use deliberation mode to get multiple perspectives debated into the best version.",
    features: ["YouTube", "Articles", "PDF", "Zettelkasten"],
    svgIcon: <SynthesizerIcon />,
    accentColor: "#22c55e",
    accentBg: "#22c55e20",
  },
  {
    icon: "/icons/visualiser.png",
    title: "Visualiser",
    description:
      "Transform content into visual diagrams. Create bento layouts, whiteboard sketches, system diagrams, and more from conversations, URLs, or text.",
    features: ["6 Styles", "AI Generated", "Download"],
    svgIcon: <VisualiserIcon />,
    accentColor: "#5bb3b3",
    accentBg: "#5bb3b320",
  },
  {
    icon: "/icons/podcast.png",
    title: "Podcast",
    description:
      "Generate live audio explanations of your Synthesizer notes. Interrupt anytime to ask questions, which get woven into the narrative.",
    features: ["Live Audio", "Interactive Q&A", "Teleprompter"],
    svgIcon: <PodcastIcon />,
    accentColor: "#8b5cf6",
    accentBg: "#8b5cf620",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-wizengamot-light italic">
        Key Features
      </h2>

      {/* Feature Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            features={feature.features}
            svgIcon={feature.svgIcon}
            accentColor={feature.accentColor}
            accentBg={feature.accentBg}
          />
        ))}
      </div>
    </section>
  );
}
