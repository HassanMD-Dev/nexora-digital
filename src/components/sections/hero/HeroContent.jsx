import React from "react";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { TrendingUp } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 py-2 px-2 text-sm font-medium tracking-wide text-primary">
          <TrendingUp />
          Results-Driven Digital Marketing Agency
        </p>
      </div>
      <div className="mb-6">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Grow Your Business with Smart Digital Marketing Solutions.
        </h1>
      </div>
      <div className="mb-8">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          We help businesses increase their online presence through SEO, social
          media marketing, paid advertising, web development, and
          high-converting digital strategies.
        </p>
      </div>
      <div className="mb-10">
        <HeroButtons />
      </div>
      <div className="mt-10 border-t border-border pt-8">
        <HeroStats />
      </div>
    </div>
  );
};

export default HeroContent;
