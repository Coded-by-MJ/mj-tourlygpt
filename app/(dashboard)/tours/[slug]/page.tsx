import TourInfo from "../../../../components/TourInfo";
import { getSingleTour } from "../../../../utils/action";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { toBase64, shimmer } from "../../../../utils/index";
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const tour = await getSingleTour(slug);
  if (!tour) {
    redirect("/tours");
  }

  const { data } = await axios(`${url}${tour.city}`);
  const tourImage: string | null = data?.results[0]?.urls?.raw;
  return (
    <div>
      <Link href="/tours" className="btn btn-primary mb-12">
        back to tours
      </Link>
      {tourImage && (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(300, 300)
            )}`}
            className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      )}
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
