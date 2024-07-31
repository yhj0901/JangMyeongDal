import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold">My Developer Blog</h1>
        <nav className="space-x-4">
          <Link href="/">
            <span className="hover:underline">Home</span>
          </Link>
          <Link href="/resume">
            <span className="hover:underline">Resume</span>
          </Link>
          <Link href="/blog">
            <span className="hover:underline">Blog</span>
          </Link>
          <Link href="/interests">
            <span className="hover:underline">Interests</span>
          </Link>
          <Link href="/gallery">
            <span className="hover:underline">Gallery</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
