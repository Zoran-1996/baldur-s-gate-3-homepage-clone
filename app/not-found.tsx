"use client";

import BaldurDivider from "@/components/common/BaldurDivider";
import Button from "@/components/common/Button";
import TextDivider from "@/components/common/TextDivider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // This runs only on the client
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col py-30 items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-150 w-full mx-auto px-[8vw] lg:px-0">
        <h1 className="text-9xl uppercase mb-4 text-baldur-gradient">404</h1>
        <h2 className="text-4xl uppercase text-baldur-gradient">
          Page not found: <span className="font-mono">{currentPath}</span>
        </h2>
        <TextDivider className="w-full my-8" />
        <p>
          Maybe you got a broken link, or maybe a misprint in the address bar.
          Try to start all over again.
        </p>
        <Button className="mt-8" onClick={() => router.push("/")}>
          Back to homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
