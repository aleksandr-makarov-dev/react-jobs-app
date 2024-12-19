import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <MainLayout title="Home">
      <p>Clicked {count} time(s)</p>
      <Button colorPalette="blue" onClick={() => setCount((prev) => prev + 1)}>
        Click me!
      </Button>
    </MainLayout>
  );
}
