import React from "react";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeRight } from "../../../../../animations/variants";

const ContactForm = () => {
  return (
    <motion.div
      variants={fadeRight}
      className="w-full rounded-3xl border border-border bg-background p-8 shadow-lg"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground">
          Send Us a Message
        </h3>

        <p className="mt-2 mb-8 text-muted leading-relaxed">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <div>
          <label
            className="block mb-2 font-medium text-foreground"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="w-full rounded-xl border border-border bg-background text-foreground placeholder:text-muted transition-all duration-300 focus:outline-none px-4 py-3 focus:ring-2 focus:border-primary"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            className="block mb-2 font-medium text-foreground"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="w-full rounded-xl border border-border bg-background text-foreground placeholder:text-muted transition-all duration-300 focus:outline-none px-4 py-3 focus:ring-2 focus:border-primary"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label
            className="block mb-2 font-medium text-foreground"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="w-full rounded-xl border border-border bg-background text-foreground placeholder:text-muted transition-all duration-300 focus:outline-none px-4 py-3 focus:ring-2 focus:border-primary"
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter the subject"
          />
        </div>
        <div>
          <label
            className="block mb-2 font-medium text-foreground"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows="4"
            className="w-full rounded-xl border border-border bg-background text-foreground transition-all duration-300 focus:outline-none px-4 py-3 focus:ring-2 focus:border-primary resize-none min-h-36"
            name="message"
            id="message"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <Button
          variant="primary"
          size="md"
          className="group w-fit inline-flex items-center gap-2"
        >
          Send Message{" "}
          <ArrowRight className="h-6 w-6 transition-all duration-300 group-hover:translate-x-1" />
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
