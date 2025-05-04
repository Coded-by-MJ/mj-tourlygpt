import { Tour } from "@prisma/client";
import Link from "next/link";

function TourCard({ tour }: { tour: Tour }) {
  const { city, title, id, country } = tour;
  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact rounded-xl bg-base-100"
    >
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title !mb-0 text-center">
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
}
export default TourCard;
