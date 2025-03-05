import Link from "next/link";


export default function Home() {
  return (
    <div className="container mx-20 my-10">
      <h1>Home</h1>
      <Link href="/users">Users</Link>
    </div>
  );
}
