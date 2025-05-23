import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata = {
  metadataBase: new URL("https://tourlygpt.miracleibharokhonre.com"),
  title: {
    default: "TourlyGPT",
    template: "%s | TourlyGPT",
  },
  description:
    "Your conversational AI companion for travel and beyond. Chat freely, explore city tours created by others, or generate your own — complete with AI-crafted images and descriptions based on any city or country.",
  openGraph: {
    images: "/tourly.png",
    siteName: "TourlyGPT",
    description:
      "Discover and create custom AI-generated city tours with TourlyGPT. Chat with your travel assistant, explore community-made guides, and generate images and descriptions for any destination.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          cardBox: "!w-full ",
        },
        variables: {
          colorPrimary: "#242c39",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
