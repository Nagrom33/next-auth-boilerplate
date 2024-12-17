import { currentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      Hello {user?.name}
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
