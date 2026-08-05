import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";

const MapSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Our Location"
          title="Find Us Here"
          description="Visit our office or schedule a meeting. We're always happy to discuss your project in person or online."
        />
        <div className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <iframe
              className="w-full h-[500px] lg:h-[550px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1785923659331!5m2!1sen!2s"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
