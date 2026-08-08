import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import projectsPData from "../../../../../data/projectsPData";
import Button from "../../../../ui/Button";
import { motion } from "framer-motion";
import {
  cardStagger,
  fadeLeft,
  fadeRight,
  fadeUp,
  heroStagger,
} from "../../../../../animations/variants";

const FeaturedProject = () => {
  const featuredProject = projectsPData.find(
    (feature) => feature.featured === true,
  );
  const {
    title,
    category,
    description,
    image,
    technologies,
    featured,
    liveDemo,
    caseStudy,
  } = featuredProject;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Featured Work"
          title="Our Featured Project"
          description="Take a closer look at one of our highlighted projects, built with modern technologies, responsive design, and a strong focus on user experience."
        />
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          <motion.div
            variants={fadeLeft}
            className="relative group rounded-3xl overflow-hidden shadow-lg border border-border transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 z-20 origin-right bg-background"
            ></motion.div>
            <span className="absolute top-5 left-5 rounded-full bg-primary text-background text-xs px-4 py-2">
              Featured Project
            </span>
          </motion.div>
          <motion.div
            variants={fadeRight}
            className="flex flex-col gap-5 justify-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full w-fit bg-primary/10 text-primary text-sm font-medium px-4 py-2"
            >
              {category}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-foreground mt-4"
            >
              {title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted leading-8 mt-2">
              {description}
            </motion.p>
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  variants={fadeUp}
                  key={index}
                  className="rounded-full border bg-muted/30 px-4 py-2 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-4 mt-10">
              <Button variant="primary" size="md">
                Live Demo
              </Button>
              <Button variant="outline" size="md">
                Case Study
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedProject;
