"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("block md:hidden", className)}>
      <div className="flex items-center gap-3">
        <motion.button
          layout
          layoutId="dock-toggle"
          onClick={() => setOpen(!open)}
          animate={{ x: open ? -4 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
          }}
          className="h-10 w-10 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
          >
            <motion.line
              animate={open ? { x1: 5, x2: 19, y1: 6, y2: 18 } : { x1: 4, x2: 20, y1: 7, y2: 7 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            />
            <motion.line
              animate={open ? { opacity: 0 } : { opacity: 1, x1: 4, x2: 20, y1: 12, y2: 12 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            />
            <motion.line
              animate={open ? { x1: 5, x2: 19, y1: 18, y2: 6 } : { x1: 4, x2: 20, y1: 17, y2: 17 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            />
          </motion.svg>
        </motion.button>

        <AnimatePresence mode="popLayout">
          {open && (
            <motion.div
              layoutId="nav"
              layout
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="flex items-center gap-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6, transition: { delay: idx * 0.05 } }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="h-10 w-10 rounded-full bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-4 pb-3",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 50, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 50, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 30, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 30, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 5,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 5,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-neutral-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
