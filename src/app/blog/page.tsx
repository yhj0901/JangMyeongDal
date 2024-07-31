import Link from 'next/link';

const posts = [
  { id: 1, title: 'Understanding Clean Architecture', date: '2024-07-31' },
  { id: 2, title: 'Getting Started with TypeScript', date: '2024-06-15' },
];

export default function BlogPage() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <span className="text-blue-500 hover:underline">
                {post.title}
              </span>
            </Link>
            <p className="text-sm text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
