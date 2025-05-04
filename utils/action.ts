"use server";

import OpenAI from "openai";
import { ChatMessage, TourInput, TourObj } from "./types";
import prisma from "./db";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateChatResponse = async (chatMessages: ChatMessage[]) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const generateTourResponse = async ({ city, country }: TourInput) => {
  const query = `Find a ${city} in this ${country}.
If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.
`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    // potentially returns a text with error message
    const tourData: { tour: TourObj | null } = JSON.parse(
      response.choices[0].message.content
    );

    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExistingTour = async ({ city, country }: TourInput) => {
  const tour = await prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
  if (tour) {
    const existingTour: TourObj = {
      city: tour.city,
      country: tour.country,
      image: tour.image,
      title: tour.title,
      description: tour.description,
      stops: tour.stops as string[],
    };
    return existingTour;
  }
  return null;
};

export const createNewTour = async (tour: TourObj) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getAllTours = async (searchTerm?: string) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: "asc",
      },
    });

    return tours;
  }

  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          country: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
    },
  });
  return tours;
};

export const getSingleTour = async (id: string) => {
  const tour = await prisma.tour.findUnique({
    where: {
      id,
    },
  });

  if (tour) {
    const existingTour: TourObj = {
      city: tour.city,
      country: tour.country,
      image: tour.image,
      title: tour.title,
      description: tour.description,
      stops: tour.stops as string[],
    };
    return existingTour;
  }
  return null;
};
