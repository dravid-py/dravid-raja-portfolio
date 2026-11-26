import React from "react";
import { AppWrapper } from "@/components/layout/AppWrapper";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { CodeHealthAI } from "@/components/project/CodeHealthAI";
import { Education } from "@/components/education/Education";
import { Resume } from "@/components/resume/Resume";
import { GitHubActivity } from "@/components/github/GitHubActivity";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <AppWrapper>
      <Hero />
      <About />
      <Skills />
      <CodeHealthAI />
      <Education />
      <Resume />
      <GitHubActivity />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}
