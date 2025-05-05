import { UserProfile } from "@clerk/nextjs";
import { fetchUserTokensById } from "../../../utils/action";
import { auth } from "@clerk/nextjs/server";
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
