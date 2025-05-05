import { UserProfile, auth } from "@clerk/nextjs";
import { fetchUserTokensById } from "../../../utils/action";

async function ProfilePage() {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className=" text-xl  font-extrabold">
        Token Balance: {currentTokens}
      </h2>
      <UserProfile />
    </div>
  );
}
export default ProfilePage;
