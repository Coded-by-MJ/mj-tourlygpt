"use client";

import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-transparent container ">
      <div className="px-6 py-24 mb-4  m-4 md:m-0">
        <div className="flex justify-center">
          <FaExclamationCircle className=" text-8xl text-yellow-400"></FaExclamationCircle>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-main font-bold mt-4 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-500 text-lg mb-10">{error.toString()}</p>
          <div className="flex items-center gap-4">
            <button
              className="bg-secondary cursor-pointer hover:bg-secondary/50  font-bold py-4 px-6 rounded"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>

          <Link
            href="/"
            className="bg-primary cursor-pointer  hover:bg-primary/50  font-bold py-4 px-6 rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ErrorPage;
