"use client";

import toast from "react-hot-toast";
import TourInfo from "./TourInfo";
import { FormEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewTour,
  fetchUserTokensById,
  generateTourResponse,
  getExistingTour,
  subtractTokens,
} from "../utils/action";
import { TourInput } from "../utils/types";
import { generateSlug } from "../utils";
import { useAuth } from "@clerk/nextjs";

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination: TourInput) => {
      const existingTour = await getExistingTour(destination);
      if (existingTour) {
        return existingTour;
      }
      const currentTokens = await fetchUserTokensById(userId);
      if (currentTokens < 300) {
        toast.error("Token balance too low...");
        return;
      }

      const { generatedTour, tokens } = await generateTourResponse(destination);

      if (!generatedTour) {
        toast.error("No matching city found...");
        return null;
      }
      const { slug, city, country } = generateSlug(generatedTour);
      const newTour = {
        title: generatedTour.title,
        description: generatedTour.description,
        stops: generatedTour.stops,
        image: generatedTour.image,
        city,
        country,
        slug,
      };
      await createNewTour(newTour);
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      const newTokens = await subtractTokens(userId, tokens);
      toast.success(`${newTokens} tokens remaining...`);
      return newTour;
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries()) as unknown as {
      city: string;
      country: string;
    };
    const destination: TourInput = generateSlug(formObj);
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

  return (
    <section className="flex w-full gap-16 flex-col items-start">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full">
        <h2 className=" mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button className="btn btn-primary join-item" type="submit">
            generate tour
          </button>
        </div>
      </form>
      {tour && <TourInfo tour={tour} />}
    </section>
  );
};
export default NewTour;
