import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tourlygpt.miracleibharokhonre.com"),
  alternates: {
    canonical: "/",
  },
  title: "TourlyGPT",
  description:
    "Your conversational AI companion for travel and beyond. Chat freely, explore city tours created by others, or generate your own — complete with AI-crafted images and descriptions based on any city or country.",
  keywords:
    "AI travel assistant, tour planner, travel chatbot, city guides, custom tours, travel companion, travel image generator",
  openGraph: {
    title: "TourlyGPT - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    url: "/",
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
    title: "TourlyGPT - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    images: ["/tourly.png"],
  },
};

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">TourlyGPT</h1>
          <p className="py-6 text-lg leading-loose">
            TourlyGPT: Your conversational AI companion for travel and beyond.
            Chat freely, explore city tours created by others, or generate your
            own — complete with AI-crafted images and descriptions based on any
            city or country.
          </p>

          <Link href="/chat" className="btn rounded-md btn-secondary ">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
