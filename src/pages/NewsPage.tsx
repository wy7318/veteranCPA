import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Post } from '../types';
import { Calendar, ChevronRight, Tag, BookOpen, Clock, Search } from 'lucide-react';

// Organization ID for Veteran CPA
const ORGANIZATION_ID = 'ac6189e3-2c36-416b-9b4d-9514ab79f2bc';

const NewsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'News & Insights | Veteran CPA';
    fetchPosts();
  }, [searchQuery, selectedCategory]);

  async function fetchPosts() {
    setLoading(true);

    let query = supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .eq('organization_id', ORGANIZATION_ID)
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (searchQuery) {
      query = query.or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%`);
    }

    if (selectedCategory) {
      query = query.eq('category', selectedCategory);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }

    setPosts(data || []);
    setTotalPosts(count || 0);

    if (data) {
      const uniqueCategories = Array.from(new Set(data.map(post => post.category).filter(Boolean)));
      setCategories(uniqueCategories as string[]);
    }

    setLoading(false);
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function getReadingTime(content: string) {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  return (
    <div>
      {/* Header banner with black background */}
      <div className="bg-black pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">News & Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay informed with our latest tax planning strategies and financial advice.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === null
                      ? 'bg-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                        ? 'bg-black text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="relative w-20 h-20">
                <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin rounded-full h-20 w-20 border-4 border-gray-200 border-t-gray-800"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-gray-800" />
                </div>
              </div>
            </div>
          ) : (
            <>
              {posts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-block p-6 bg-gray-100 rounded-full mb-6">
                    <Search className="h-12 w-12 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">No posts found</h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery
                      ? `No results for "${searchQuery}". Try a different search term.`
                      : 'No articles available at the moment. Check back soon!'}
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-6 py-3 bg-black text-white rounded-lg transition-all hover:bg-gray-800"
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      onMouseEnter={() => setHoveredPost(post.id)}
                      onMouseLeave={() => setHoveredPost(null)}
                      className={`
                        relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 flex flex-col
                        ${hoveredPost === post.id ? 'shadow-xl scale-[1.02]' : 'hover:shadow-xl hover:scale-[1.02]'}
                      `}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900"></div>

                      <a href={`/news/${post.slug}`} className="flex flex-col flex-grow">
                        {post.featured_image && post.featured_image.trim() !== '' && (
                          <div className="aspect-[16/9] overflow-hidden relative">
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              className={`w-full h-full object-cover transition-all duration-700 ${hoveredPost === post.id ? 'scale-110 blur-[1px] grayscale' : 'scale-100'
                                }`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 ${hoveredPost === post.id ? 'opacity-100' : ''
                              }`}></div>
                          </div>
                        )}

                        <div className="p-6 flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            <time className="text-sm text-gray-500 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(post.published_at)}
                            </time>
                            {post.category && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                <Tag className="w-3 h-3 mr-1" />
                                {post.category}
                              </span>
                            )}
                          </div>

                          <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3 line-clamp-2">
                            {post.title}
                          </h2>

                          <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>

                          <div className="flex justify-between items-center mt-auto">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {getReadingTime(post.content)}
                            </div>

                            <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-1 transition-transform">
                              Read More
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;