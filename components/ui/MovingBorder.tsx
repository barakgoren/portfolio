"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: "calc(1.75rem * 0.96)",
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "calc(1.75rem * 0.96)" }}
      >
        <MovingBorderGradient duration={duration} className={borderClassName} />
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: "calc(1.75rem * 0.96)",
        }}
      >
        {children}
      </div>
    </Component>
  );
};

const MovingBorderGradient = ({
  duration = 2000,
  className,
}: {
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: duration / 1000,
        repeat: Infinity,
        ease: "linear",
      }}
      className={cn(
        "absolute inset-[-100%] flex items-center justify-center",
        className
      )}
    >
      <div className="h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)]" />
    </motion.div>
  );
};

export const Button = ({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  [key: string]: unknown;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600",
    outline:
      "border border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-800",
    ghost: "bg-transparent text-neutral-200 hover:bg-neutral-800",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
