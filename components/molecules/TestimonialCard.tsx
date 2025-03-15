import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "@/components/molecules/shared/StarRating";
import { motion } from "framer-motion"

type TestimonialCardProps = {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

function TestimonialCard({ name, location, rating, comment }: TestimonialCardProps) {
  return (
    <div className="border p-2 rounded-md hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
      <div className="flex flex-row items-center gap-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn" />
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
        <div className="flex flex-row items-start justify-between w-full">
          <div>
            <h4 className="font-bold">{name}</h4>
            <h6 className="text-slate-500 text-base">{location}</h6>
          </div>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className="text-base pt-2 px-2 text-slate-500">{comment}</p>
    </div>
  );
}

export { TestimonialCard }