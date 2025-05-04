import Link from "next/link";
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
