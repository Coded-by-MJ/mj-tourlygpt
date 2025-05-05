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
  openGraph: {
    images: "/tourly.png",
    siteName: "TourlyGPT",
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
