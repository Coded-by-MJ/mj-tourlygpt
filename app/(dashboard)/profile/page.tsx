import { UserProfile } from "@clerk/nextjs";
import { fetchUserTokensById } from "../../../utils/action";
import { auth } from "@clerk/nextjs/server";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tourlygpt.miracleibharokhonre.com/profile",
  },
  title: "Profile",
  description:
    "Your conversational AI companion for travel and beyond. Chat freely, explore city tours created by others, or generate your own — complete with AI-crafted images and descriptions based on any city or country.",
  keywords:
    "AI travel assistant, tour planner, travel chatbot, city guides, custom tours, travel companion, travel image generator",
  openGraph: {
    title: "Profile - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    url: "https://tourlygpt.miracleibharokhonre.com/profile",
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
    title: "Profile - Explore, Chat, and Plan AI-Powered Tours",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    images: ["/tourly.png"],
  },
};
async function ProfilePage() {
  const { userId } = await auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div className="flex w-full flex-col gap-8 [&>div]:!w-full [&>div]:!max-w-[55rem] ">
      <h2 className=" text-xl  font-extrabold">
        Token Balance: {currentTokens}
      </h2>
      <UserProfile routing="hash" />
    </div>
  );
}
export default ProfilePage;
