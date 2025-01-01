

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Data Analysis",
      image: "https://via.placeholder.com/300",
      date: "December 5, 2024",
      excerpt: "Learn the fundamentals of data analysis and how to get started in the field.",
      link: "https://www.example.com/data-analysis-basics",
    },
    {
      id: 2,
      title: "Top 5 Tools for Data Analysts",
      image: "https://via.placeholder.com/300",
      date: "November 28, 2024",
      excerpt: "Explore the best tools that every data analyst should know.",
      link: "https://www.example.com/data-analysis-tools",
    },
    {
      id: 3,
      title: "The Role of Machine Learning in Data Analysis",
      image: "https://via.placeholder.com/300",
      date: "November 21, 2024",
      excerpt: "Discover how machine learning is transforming data analysis practices.",
      link: "https://www.example.com/ml-in-data-analysis",
    },
  
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Data Analysis Blog</h1>
          <p className="mt-2 text-lg">Insights, tips, and resources for mastering data analysis.</p>
        </div>
      </header>

      {/* Blog List */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                <p className="text-gray-800 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 hover:underline">
                  Read More →
                </button>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Pagination */}
      <footer className="flex justify-center py-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded mx-2">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded mx-2">
          Next
        </button>
      </footer>
    </div>
  );
};

export default BlogPage;
