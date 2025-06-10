"use client";

import { useState } from "react";
import GSAPContext from "./GSAPContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  const [timeline, setTimeline] = useState<GSAPTimeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    setTimeline(tl);
  });

  return (
    <GSAPContext.Provider value={{ timeline }}>{children}</GSAPContext.Provider>
  );
};
export default GSAPProvider;
