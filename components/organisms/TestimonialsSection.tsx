import { TestimonialCard } from "@/components/molecules/TestimonialCard";

function TestimonialsSection (){
  const testimonials = Array(8).fill({
    name: "Sophie",
    location: "Paris",
    rating: 3.2,
    comment: "Livraison rapide et produits de grande qualité. Je recommande vivement."
  });

  return (
    <div className="mx-8 max-sm:mb-8 min-h-[60vh]">
      <h2 className="text-4xl text-center font-bold">Témoignages de nos clients satisfaits</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export { TestimonialsSection }