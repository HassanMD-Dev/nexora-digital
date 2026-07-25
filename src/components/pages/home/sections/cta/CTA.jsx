import React from "react";
import Container from "../../../../ui/Container";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 lg:p-16 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl flex flex-col gap-4">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Grow Your Business?
            </h3>
            <p className="text-blue-100 leading-relaxed max-w-xl">
              Turn your ideas into a high-performing digital experience. From
              modern websites to complete digital solutions, we're here to help
              your business succeed.
            </p>
          </div>
          <div>
            <Button
              className="group inline-flex items-center gap-2 border-white text-white hover:bg-background hover:text-blue-600"
              variant="outline"
              size="lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
