import type { Metadata } from "next";
import { AboutBlock } from "./components/about-block";

export const metadata: Metadata = { title: "About | Sahar Amjad Photography" };

export default function AboutPage() {
  return (
    <>
      <div className="h-24 bg-neutral-900" />
      <AboutBlock
        title="Hi, I'm Sahar"
        text="I'm a photographer passionate about honest, emotional storytelling. With an eye for natural light and candid moments, I create images that feel as good as the day they were made."
        seed="about-1"
      />
      <AboutBlock
        title="My Process"
        text="Every session starts with a conversation about your vision. From planning and location scouting to shooting and a carefully edited gallery, I guide you through each step so you can simply be present."
        seed="about-2"
        reverse
      />
    </>
  );
}
