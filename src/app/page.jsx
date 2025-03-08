import ServerSide from "@/components/ServerSide";
import Link from "next/link";
import { Suspense } from "react";




export default async function Home() {

  return (
    <div className="m-4">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <Link href="/client-side">Client Side</Link>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ServerSide />
        </Suspense>
      </div>
    </div>
  );
}
