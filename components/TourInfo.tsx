import { TourObj } from "../utils/types";

function TourInfo({ tour }: { tour: TourObj }) {
  const { title, description, stops } = tour;

  return (
    <div className="max-w-2xl w-full">
      <h1 className="text-4xl capitalize font-semibold mb-4">{title}</h1>
      <p className="leading-loose mb-6">{description}</p>
      <ul>
        {stops.map((stop) => {
          return (
            <li key={stop} className="mb-4 bg-base-100 p-4 rounded-xl">
              <p className="text">{stop}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TourInfo;
