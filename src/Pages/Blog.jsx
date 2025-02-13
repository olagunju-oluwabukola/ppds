import { useState } from "react";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Sample Size Calculation for Qualitative Research",
      image: "https://cdn.prod.website-files.com/63d0ecc632a91d417f163394/66c5b836536ba46f62d219ed_Group%201707485622.svg",
      date: "February 1, 2025",
      excerpt: "Understand how to determine the right sample size for qualitative studies.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/sample-size-calculation-for-qualitative.html",
    },
    {
      id: 2,
      title: "Sample Size Calculation",
      image: "https://sixsigmastudyguide.com/wp-content/uploads/2020/12/ds1.png",
      date: "February 1, 2025",
      excerpt: "Learn the methods for calculating sample size in research.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/sample-size-calculation.html",
    },
    {
      id: 3,
      title: "The Test of Rigour in Research",
      image: "https://qdacity.com/assets/img/rigor-in-research-513.cache.webp",
      date: "February 1, 2025",
      excerpt: "Ensuring reliability and validity in research through rigorous testing.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/the-test-of-rigour-in-research-ensuring.html",
    },
    {
      id: 4,
      title: "Validity and Reliability in Qualitative Research",
      image: "https://i0.wp.com/www.projectguru.in/wp-content/uploads/2020/01/1-6-scaled.jpg?w=1024&ssl=1",
      date: "February 1, 2025",
      excerpt: "Explore the importance of validity and reliability in qualitative studies.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/validity-and-reliability-in-qualitative.html",
    },
    {
      id: 5,
      title: "Choosing the Right Statistical Test",
      image: "https://asset-www.med-iq.com/file/2021/02/ChoosingRightStatisticalTest_2.8.jpg",
      date: "February 1, 2025",
      excerpt: "A guide to selecting appropriate statistical tests for your data.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/how-to-choose-right-statistical-test.html",
    },
    {
      id: 6,
      title: "Building a Successful Data Analytics Career",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/new-frs-image-data-analyst-career_ram.jpg",
      date: "February 1, 2025",
      excerpt: "Tips and strategies for launching a successful data analytics career.",
      link: "https://ppdsanalytics.blogspot.com/2025/02/how-to-start-and-build-successful.html",
    },
  ];
  

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(posts.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPosts = () => {
    const startIndex = currentPage * cardsPerPage;
    return posts.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className=" mx-5 md:mx-10 py-12">
      <div className="text-center pt-6 md:pt-12 md:pb-10">
        <h1 className="text-2xl md:text-5xl font-bold text-black"><span className='text-green-900'>Data Analysis</span> Blog</h1>
        <div className="mt-5 h-1 w-20 bg-green-900 mx-auto mb-5"></div>
          <p className="mt-2 text-lg text-gray-600">Insights, tips, and resources for mastering data analysis.</p>
        </div>
      </header>

      {/* Blog List */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentPosts().map((post) => (
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
                <button className="text-green-600 hover:underline">
                  Read More →
                </button>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Pagination */}
      <footer className="flex justify-center py-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded mx-2 ${
            currentPage === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded mx-2 ${
            currentPage === totalPages - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default BlogPage;
