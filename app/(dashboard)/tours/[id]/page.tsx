import TourInfo from "../../../../components/TourInfo";
import { getSingleTour } from "../../../../utils/action";
import Link from "next/link";
import { redirect } from "next/navigation";

const SingleTourPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const tour = await getSingleTour(id);
  if (!tour) {
    redirect("/tours");
  }
  return (
    <div>
      <Link href="/tours" className="btn btn-primary mb-12">
        back to tours
      </Link>
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
