"use client";

import { motion } from "framer-motion";

interface Section {
  title: string;
  description: string;
}

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
  aerodynamics: (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  // ... add other section icons
} as const;

const SectionIcon = ({ section }: { section: keyof typeof icons }) => {
  return icons[section] || null;
};
