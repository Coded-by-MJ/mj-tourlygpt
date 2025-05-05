import { UserButton } from "@clerk/nextjs";
import { fetchOrGenerateTokens } from "../utils/action";
import { auth, currentUser } from "@clerk/nextjs/server";

async function MemberProfile() {
  const user = await currentUser();
  const { userId } = await auth();
  await fetchOrGenerateTokens(userId);

  return (
    <div className="px-4 w-full flex items-center gap-2">
      <UserButton />
      <p className="overflow-ellipsis  overflow-hidden">
        {user?.emailAddresses[0]?.emailAddress}
      </p>
    </div>
  );
}

export default MemberProfile;
