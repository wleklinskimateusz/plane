"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface NotFoundProps {
  translations: {
    title: string;
    description: string;
    goBack: string;
    goHome: string;
  };
}

export function NotFound({
  translations: { title, description, goBack, goHome },
}: NotFoundProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-300 text-center mb-8 max-w-md">{description}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {goBack}
        </Button>
        <Button onClick={() => router.push("/")}>{goHome}</Button>
      </div>
    </div>
  );
}
