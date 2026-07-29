import React from "react";
import storyHighlights from "../../../../../data/aboutData";

const StoryContent = () => {
  return (
    <div className="flex-1 flex flex-col items-start gap-8 mt-12">
      <h3 className="text-4xl lg:text-5xl font-bold text-foreground">
        Our Mission
      </h3>
      <p className="text-lg leading-relaxed text-muted max-w-xl">
        We believe every business deserves a website that not only looks modern
        but also delivers real value. Our focus is on creating digital
        experiences that are fast, user-friendly, and built to help brands grow
        with confidence.
      </p>
      <p className="text-lg leading-relaxed text-muted max-w-xl">
        By combining thoughtful design, clean development, and long-term
        support, we build solutions that strengthen online presence and create
        meaningful connections between businesses and their customers.
      </p>
      <div className="flex flex-col mt-8 gap-5">
        {storyHighlights.map((story) => {
          const Icon = story.icon;
          return (
            <div key={story.id} className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-foreground leading-6">
                {story.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryContent;
