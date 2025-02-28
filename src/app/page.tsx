import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Clock App</h1>
      <ul>
        <li>
          <Link href="/big" className="text-blue-600 hover:text-blue-800 font-bold">Big</Link>
        </li>
        <li>
          <Link href="/binary" className="text-blue-600 hover:text-blue-800 font-bold">Binary</Link>
        </li>
      </ul>
    </main>
  );
}
