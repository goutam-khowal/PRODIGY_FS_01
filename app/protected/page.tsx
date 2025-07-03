import { auth, signOut } from "app/auth";
import Secret from "../Secret";

export default async function ProtectedPage() {
  let session = await auth();

  return <Secret email={session?.user?.email} />;
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
