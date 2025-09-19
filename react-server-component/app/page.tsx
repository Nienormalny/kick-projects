import LikeButton from "@/components/LikeButton";

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    
    const data = await response.json();
    return data;
    
  } catch(error: any) {
    if (error) {
      console.error(error.message)
    }
  }
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default async function PostsPage() {
  const posts: Post[] = await getPosts();
  return (
      <div className="min-h-screen w-screen bg-gray-800 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Posts</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col gap-y-4 bg-gray-200 p-4 border border-gray-400 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
              <LikeButton buttonText="Like" />
            </li>
          ))}
        </ul>
      </div>
  );
}
