'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
  }, [router]);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress(prev => prev >= 80 ? 80 : prev + 2);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [loading]);

  if (!loading && progress === 100) return null;

  return (
    <Progress className="h-1.5 fixed top-0 left-0 right-0 z-50" value={progress} />
  );
}
