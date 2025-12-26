"use client";

import Image from "next/image";
import { useState, ReactNode } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  svgIcon: ReactNode;
  accentColor: string;
  accentBg: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  features,
  svgIcon,
  accentColor,
  accentBg,
}: FeatureCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group bg-wizengamot-card border-2 border-wizengamot-card-border rounded-xl p-5 flex flex-col text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
      style={{
        // @ts-expect-error CSS custom properties
        "--accent-color": accentColor,
        "--accent-bg": accentBg,
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
        }}
      >
        {!imageError ? (
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white">{svgIcon}</div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-wizengamot-light mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-wizengamot-muted leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-1.5">
        {features.map((feature) => (
          <span
            key={feature}
            className="text-xs font-medium px-2 py-1 rounded transition-colors duration-200"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "var(--wizengamot-muted, #8b8d94)",
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
