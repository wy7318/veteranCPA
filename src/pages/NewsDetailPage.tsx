import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Post } from '../types';
import { Calendar, ArrowLeft, Clock, Tag, Share2, BookOpen, ChevronLeft, Heart } from 'lucide-react';

// Organization ID for Veteran CPA
const ORGANIZATION_ID = 'ac6189e3-2c36-416b-9b4d-9514ab79f2bc';

interface NewsDetailPageProps {
  slug: string;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ slug }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    fetchPost();

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  async function fetchPost() {
    setLoading(true);

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('organization_id', ORGANIZATION_ID)
      .eq('published', true)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
      return;
    }

    setPost(data);
    document.title = `${data.title} | Veteran CPA`;

    if (data?.category) {
      const { data: relatedData } = await supabase
        .from('posts')
        .select('*')
        .eq('organization_id', ORGANIZATION_ID)
        .eq('published', true)
        .eq('category', data.category)
        .neq('id', data.id)
        .order('published_at', { ascending: false })
        .limit(3);

      setRelatedPosts(relatedData || []);
    }

    setLoading(false);
    window.scrollTo(0, 0);
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function getReadingTime(content: string) {
    if (!content) return '1 min read';
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const words = textContent.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  }

  function handleShare(platform: string) {
    if (!post) return;

    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        break;
    }

    setIsShareOpen(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-navy-50 to-white">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin rounded-full h-20 w-20 border-4 border-navy-200 border-t-navy-500"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-navy-500" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-50 to-white pt-20">
        <div className="text-center bg-white p-12 rounded-xl shadow-xl max-w-md">
          <div className="inline-block p-6 bg-navy-50 rounded-full mb-6">
            <BookOpen className="h-12 w-12 text-navy-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for might have been moved or doesn't exist.</p>
          <a
            href="/news"
            className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-500 text-white rounded-xl font-medium hover:shadow-lg inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </a>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-navy-50 to-white">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-navy-500 to-navy-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="h-[70vh] relative overflow-hidden pt-16">
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-custom max-w-4xl">
            <div className="space-y-6">
              <a
                href="/news"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors border border-white/30 py-2 px-4 rounded-full hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </a>

              <div className="space-y-2">
                {post.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-600/90 text-white">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.published_at)}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {getReadingTime(post.content)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-4xl px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 relative">
          <div className="absolute right-6 -top-6">
            <div className="relative">
              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-navy-500 focus:outline-none"
              >
                <Share2 className="h-5 w-5" />
              </button>

              {isShareOpen && (
                <div className="absolute right-0 top-12 bg-white p-3 rounded-xl shadow-xl grid grid-cols-4 gap-2 w-48">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="text-navy-400 p-2 rounded-full">X</div>
                    <span className="text-xs">Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="text-navy-600 p-2 rounded-full">f</div>
                    <span className="text-xs">Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="text-navy-700 p-2 rounded-full">in</div>
                    <span className="text-xs">LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="text-gray-600 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" /></svg>
                    </div>
                    <span className="text-xs">Copy Link</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  liked
                    ? 'bg-red-50 text-red-500'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                {liked ? 'Liked' : 'Like'}
              </button>
            </div>

            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-navy-100 rounded-full p-2 mr-3">
                <BookOpen className="h-5 w-5 text-navy-600" />
              </span>
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/news/${relatedPost.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.featured_image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-gray-900 group-hover:text-navy-600 transition-colors mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <div className="mt-auto pt-3 flex justify-between items-center text-sm text-gray-500">
                      <time>{formatDate(relatedPost.published_at).split(',')[0]}</time>
                      <span className="text-navy-600 group-hover:translate-x-1 transition-transform flex items-center">
                        Read
                        <ChevronLeft className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center my-12 gap-4">
          <a
            href="/news"
            className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-navy-600" />
            <span className="font-medium">All Articles</span>
          </a>

          <button
            className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-navy-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsDetailPage;