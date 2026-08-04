import React from "react";

const ContactInfoCard = ({ info }) => {
  const { icon: Icon, title, value, description } = info;
  return (
    <div className="group rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-7 w-7 transition-all duration-300 group-hover:scale-110 " />
      </div>
      <h3 className="mt-6 text-xl font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-lg font-medium text-primary">{value}</p>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </div>
  );
};

export default ContactInfoCard;
