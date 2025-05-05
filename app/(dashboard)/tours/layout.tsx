import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tours",
  },
  title: "Tours",
  description:
    "Your conversational AI companion for travel and beyond. Chat freely, explore city tours created by others, or generate your own — complete with AI-crafted images and descriptions based on any city or country.",
  keywords:
    "AI travel assistant, tour planner, travel chatbot, city guides, custom tours, travel companion, travel image generator",
  openGraph: {
    title: "Tours - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    url: "/tours",
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
    title: "Tours - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    images: ["/tourly.png"],
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
