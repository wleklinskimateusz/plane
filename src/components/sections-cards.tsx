"use client";

import { motion } from "framer-motion";
import { Code, Hammer, File, BatteryCharging, Sun } from "lucide-react";

export function SectionCard({
  title,
  description,
  delay,
  icon,
}: {
  title: string;
  description: string;
  delay: number;
  icon: keyof typeof icons;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2 }}
      className="rounded-lg bg-black/30 p-8 backdrop-blur-sm transition-colors hover:bg-black/40"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-white/10 p-3">
          <SectionIcon section={icon} />
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const icons = {
  construction: <Hammer />,
  programming: <Code />,
  marketing: <File />,
  electronics: <BatteryCharging />,
  solar: <Sun />,
} as const;

const SectionIcon = ({ section }: { section: keyof typeof icons }) => {
  return icons[section] || null;
};
