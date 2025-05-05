import NewTour from "../../../../components/NewTour";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tourlygpt.miracleibharokhonre.com/tours/new-tour",
  },
  title: "Create Tour",
  description:
    "Your conversational AI companion for travel and beyond. Chat freely, explore city tours created by others, or generate your own — complete with AI-crafted images and descriptions based on any city or country.",
  keywords:
    "AI travel assistant, tour planner, travel chatbot, city guides, custom tours, travel companion, travel image generator",
  openGraph: {
    title: "Create Tour - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    url: "https://tourlygpt.miracleibharokhonre.com/tours/new-tour",
    siteName: "TourlyGPT",
    images: [
      {
        url: "/tourly.png", // Public folder image
        width: 1200,
        height: 630,
        alt: "TourlyGPT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Tour - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    images: ["/tourly.png"],
  },
};

function NewTourPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
}
export default NewTourPage;
