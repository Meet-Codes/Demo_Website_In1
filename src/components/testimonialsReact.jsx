import React from 'react';
import { createRoot } from 'react-dom/client';
import { CircularTestimonials } from '../../components/ui/circular-testimonials';

const testimonials = [
  {
    quote: "Atelier Kin achieved what seemed impossible: monumental architectural gravity that feels deeply intimate, peaceful, and luminous at any hour of the day.",
    name: "Kenji & Elena Takahashi",
    designation: "Private Homeowners — The Solstice Residence",
    src: "/assets/hero_interior.jpg",
  },
  {
    quote: "The spatial sequencing is sublime. The interplay of tactile stone and subtle light turns returning home into a meditative ritual.",
    name: "Marcus Vance",
    designation: "Client & Creative Director — Aethelgard Penthouse",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    quote: "Atelier Kin respected our heritage whilst transforming this ancient estate into a world-class hospitality destination.",
    name: "Camille de Montreuil",
    designation: "Managing Partner, Lumina Hospitality Group",
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
  },
];

export function mountCircularTestimonials(container) {
  if (!container) return;
  const root = createRoot(container);
  root.render(
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
        name: "clamp(1.6rem, 2.5vw, 2.2rem)",
        designation: "0.82rem",
        quote: "clamp(1.15rem, 1.8vw, 1.55rem)",
      }}
    />
  );
  return () => root.unmount();
}
