import React from "react";
import { cn } from "@/lib/utils";

type DottedGlowBackgroundProps = {
  className?: string;
  opacity?: number;
  gap?: number;
  radius?: number;
  colorLightVar?: string;
  glowColorLightVar?: string;
  colorDarkVar?: string;
  glowColorDarkVar?: string;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

const toColorValue = (value: string | undefined, fallback: string) => {
  if (!value) return `hsl(var(${fallback}))`;
  if (value.startsWith("var(")) return value;
  if (value.startsWith("--")) return `hsl(var(${value}))`;
  return value;
};

export const DottedGlowBackground = ({
  className,
  opacity = 1,
  gap = 22,
  radius = 1.6,
  colorLightVar = "--muted-foreground",
  glowColorLightVar = "--gradient-start",
  colorDarkVar = "--muted-foreground",
  glowColorDarkVar = "--gradient-end",
  backgroundOpacity = 0,
  speedMin = 0.5,
  speedMax = 1.4,
  speedScale = 1,
}: DottedGlowBackgroundProps) => {
  const style: React.CSSProperties = {
    ["--dgb-opacity" as string]: opacity,
    ["--dgb-gap" as string]: `${gap}px`,
    ["--dgb-radius" as string]: `${radius}px`,
    ["--dgb-dot-light" as string]: toColorValue(colorLightVar, "--muted-foreground"),
    ["--dgb-dot-dark" as string]: toColorValue(colorDarkVar, "--muted-foreground"),
    ["--dgb-glow-light" as string]: toColorValue(glowColorLightVar, "--gradient-start"),
    ["--dgb-glow-dark" as string]: toColorValue(glowColorDarkVar, "--gradient-end"),
    ["--dgb-bg-opacity" as string]: backgroundOpacity,
    ["--dgb-speed-min" as string]: `${speedMin * speedScale}s`,
    ["--dgb-speed-max" as string]: `${speedMax * speedScale}s`,
  };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={style}
      aria-hidden
    >
      {backgroundOpacity > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `hsl(var(--background) / ${backgroundOpacity})` }}
        />
      )}

      {/* Dot layers */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dgb-dot-light) var(--dgb-radius), transparent 0)",
          backgroundSize: "var(--dgb-gap) var(--dgb-gap)",
          opacity: "var(--dgb-opacity)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dgb-dot-dark) var(--dgb-radius), transparent 0)",
          backgroundSize: "var(--dgb-gap) var(--dgb-gap)",
          opacity: "calc(var(--dgb-opacity) * 0.8)",
        }}
      />

      {/* Glow layers */}
      <div
        className="absolute inset-0 dotted-glow-layer slow"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--dgb-glow-light) 22%, transparent 40%)," +
            "radial-gradient(circle at 80% 12%, var(--dgb-glow-light) 18%, transparent 36%)," +
            "radial-gradient(circle at 52% 80%, var(--dgb-glow-light) 16%, transparent 36%)",
        }}
      />
      <div
        className="absolute inset-0 dotted-glow-layer"
        style={{
          backgroundImage:
            "radial-gradient(circle at 16% 64%, var(--dgb-glow-dark) 20%, transparent 38%)," +
            "radial-gradient(circle at 70% 46%, var(--dgb-glow-dark) 18%, transparent 32%)," +
            "radial-gradient(circle at 48% 18%, var(--dgb-glow-dark) 14%, transparent 30%)",
        }}
      />
    </div>
  );
};
