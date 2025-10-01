import React from 'react';
import ArticleCard from './ArticleCard';
import { FaFire, FaArrowRight } from 'react-icons/fa';
import "../App.css"

const Feed = () => {
  const trendingArticles = [
    {
      id: 1,
      title: 'New AI Revolution in India',
      category: 'Technology',
      date: 'Oct 01',
      views: '2.5K',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Startups Funding Boom 2025',
      category: 'Business',
      date: 'Sep 30',
      views: '3.2K',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Cricket World Cup Updates',
      category: 'Sports',
      date: 'Sep 29',
      views: '5.1K',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const articles = [
    {
      id: 1,
      author: 'Priya Sharma',
      authorImage: 'https://i.pravatar.cc/150?img=20',
      timeAgo: '2h ago',
      title: 'How AI is Transforming Indian Healthcare System in 2025',
      excerpt: 'Artificial Intelligence is revolutionizing healthcare in India with innovative solutions for early disease detection, personalized treatment plans, and improved patient care management...',
      image: 'https://picsum.photos/800/400?random=1',
      likes: 245,
      comments: 34
    },
    {
      id: 2,
      author: 'Rahul Verma',
      authorImage: 'https://i.pravatar.cc/150?img=21',
      timeAgo: '5h ago',
      title: 'The Rise of Indian Startups: Success Stories from 2025',
      excerpt: 'India has emerged as the third-largest startup ecosystem globally. Learn about the inspiring journeys of founders who turned their ideas into unicorns...',
      image: 'https://picsum.photos/800/400?random=2',
      likes: 512,
      comments: 67
    },
    {
      id: 3,
      author: 'Anjali Das',
      authorImage: 'https://i.pravatar.cc/150?img=22',
      timeAgo: '8h ago',
      title: 'Sustainable Living: Easy Steps to Reduce Your Carbon Footprint',
      excerpt: 'Climate change is real, and every action counts. Here are practical tips to make your lifestyle more eco-friendly without breaking the bank...',
      image: 'https://picsum.photos/800/400?random=3',
      likes: 389,
      comments: 45
    },
    {
      id: 4,
      author: 'Vikram Singh',
      authorImage: 'https://i.pravatar.cc/150?img=23',
      timeAgo: '12h ago',
      title: 'Cricket World Cup 2025: India\'s Road to Victory',
      excerpt: 'An in-depth analysis of Team India\'s performance in the ongoing World Cup. Expert predictions and player statistics that matter...',
      image: 'https://picsum.photos/800/400?random=4',
      likes: 891,
      comments: 156
    },
    {
      id: 5,
      author: 'Sneha Kapoor',
      authorImage: 'https://i.pravatar.cc/150?img=24',
      timeAgo: '1d ago',
      title: 'Top 10 Travel Destinations in India for 2025',
      excerpt: 'Discover hidden gems and popular tourist spots across India. From serene beaches to majestic mountains, plan your perfect vacation...',
      image: 'https://picsum.photos/800/400?random=5',
      likes: 678,
      comments: 92
    }
  ];

  return (
    <div className="feed-wrapper">
      {/* Trending Section */}
      <div className="trending-section">
        <div className="trending-header">
          <h2>
            <FaFire className="fire-icon" />
            Trending Now
          </h2>
          <span className="see-all">See All</span>
        </div>
        
        <div className="trending-cards">
          {trendingArticles.map((article) => (
            <div 
              key={article.id} 
              className="trending-card"
              style={{ background: article.gradient }}
            >
              <div className="trending-card-content">
                <div className="trending-badge">{article.category}</div>
                <h3>{article.title}</h3>
                <div className="trending-meta">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.views} views</span>
                </div>
              </div>
              <button className="trending-btn">
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Feed */}
      <div className="feed-container">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
