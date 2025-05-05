import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="flex items-center w-full justify-center min-h-screen">
      <SignUp />
    </section>
  );
}
