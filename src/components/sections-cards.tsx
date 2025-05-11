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
      className="bg-black/30 backdrop-blur-sm rounded-lg p-8 hover:bg-black/40 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="bg-white/10 rounded-lg p-3">
          <SectionIcon section={icon} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
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
