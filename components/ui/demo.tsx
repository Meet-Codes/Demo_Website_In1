import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "Atelier Kin achieved what seemed impossible: monumental architectural gravity that feels deeply intimate, peaceful, and luminous at any hour of the day.",
    name: "Kenji & Elena Takahashi",
    designation: "Private Homeowners — The Solstice Residence",
    src:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    quote:
      "The spatial sequencing is sublime. The interplay of tactile stone and subtle light turns returning home into a meditative ritual.",
    name: "Marcus Vance",
    designation: "Client & Creative Director — Aethelgard Penthouse",
    src:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    quote:
      "Atelier Kin respected our heritage whilst transforming this ancient estate into a world-class hospitality destination.",
    name: "Camille de Montreuil",
    designation: "Managing Partner, Lumina Hospitality Group",
    src:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
  },
];

export const CircularTestimonialsDemo = () => (
  <section>
    {/* Dark luxury testimonials section */}
    <div className="bg-[#121211] p-12 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1200px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f5f4f0",
            designation: "#d8c29d",
            testimony: "#a3a19b",
            arrowBackground: "#1a1a18",
            arrowForeground: "#f5f4f0",
            arrowHoverBackground: "#d8c29d",
          }}
          fontSizes={{
            name: "32px",
            designation: "14px",
            quote: "22px",
          }}
        />
      </div>
    </div>
  </section>
);

export default CircularTestimonialsDemo;
