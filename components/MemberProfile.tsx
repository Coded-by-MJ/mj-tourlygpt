import { UserButton, currentUser } from "@clerk/nextjs";

async function MemberProfile() {
  const user = await currentUser();

  return (
    <div className="px-4  flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p className="overflow-ellipsis overflow-hidden">
        {user.emailAddresses[0].emailAddress}
      </p>
    </div>
  );
}
export default MemberProfile;
