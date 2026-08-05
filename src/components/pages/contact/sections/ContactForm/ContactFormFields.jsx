import React from "react";
import SubmitButton from "./SubmitButton";

const ContactFormFields = ({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-foreground"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="John"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="lastName"
          className="text-sm font-medium text-foreground"
        >
          Last Name
        </label>
        <input
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          placeholder="you@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone
        </label>
        <input
          type="tel"
          placeholder="+1 (555) 123-4567"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition-all duration-300 focus:border-primary"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-foreground"
        >
          Project Type
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition-all duration-300 focus:border-primary"
        >
          <option value="Select Servive">Select Servive</option>
          <option value="Business Website">Business Website</option>
          <option value="E-Commerce Store">E-Commerce Store</option>
          <option value="Landing Page">Landing Page</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          rows={6}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="rounded-xl border border-border px-4 py-3 resize-none outline-none focus:border-primary transition-all duration-300"
        ></textarea>
      </div>
      <div className="md:col-span-2 mt-8">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default ContactFormFields;
