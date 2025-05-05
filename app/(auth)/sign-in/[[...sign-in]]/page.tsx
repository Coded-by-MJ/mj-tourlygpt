import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="flex items-center w-full justify-center min-h-screen">
      <SignIn />
    </section>
  );
}
