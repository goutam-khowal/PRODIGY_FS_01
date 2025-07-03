import { auth } from "app/auth";
import Secret from "../Secret";

export default async function ProtectedPage() {
  const session = await auth();
  return <Secret email={session?.user?.email ?? undefined} />;
}
