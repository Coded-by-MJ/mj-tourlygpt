import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SignIn />
    </main>
  );
};
export default SignInPage;
