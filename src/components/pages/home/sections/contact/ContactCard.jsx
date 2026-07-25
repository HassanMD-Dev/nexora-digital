import React from "react";

const ContactCard = ({ contact }) => {
  const { icon: Icon, title, value } = contact;
  return (
    <div className="group flex flex-col h-full items-start rounded-xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
      <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{value}</p>
    </div>
  );
};

export default ContactCard;
