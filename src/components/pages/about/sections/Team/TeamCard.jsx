import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ team }) => {
  const { socials, name, role, description, image } = team;
  return (
    <div className="group h-full rounded-3xl border border-border bg-background overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
      <div className="bg-primary/5 flex items-center justify-center p-6 border-b border-border/50">
        <img
          src={image}
          alt={name}
          className="w-full max-w-[220px] h-auto scale-100 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          {role}
        </span>
        <p className="text-muted leading-relaxed flex-1 text-base">{description}</p>
        <div className="flex items-center gap-3 pt-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link className="h-10 w-10 mt-auto rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" key={social.id} to={social.href}>
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
