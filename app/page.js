import Home from "@/components/home";

import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div></div> }>
        <Home />
      </Suspense>
  );
}
