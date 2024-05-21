"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Uh-oh! That&apos;s not a valid request!</h1>
      <p>This request could not be completed. If you believe this to be an error, let us know <a href="/">on the forums</a>.</p>
    </div>
  );
}
