"use client";
import { getAllTours } from "../utils/action";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

const ToursPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["tours", searchValue],
    queryFn: () => getAllTours(searchValue),
  });

  return (
    <section className="flex w-full flex-col gap-12 items-start">
      <form className="max-w-lg w-full">
        <div className="join w-full">
          <input
            type="text"
            placeholder="enter city or country here.."
            className="input input-bordered join-item w-full"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending ? "please wait" : "reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className=" loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </section>
  );
};
export default ToursPage;
