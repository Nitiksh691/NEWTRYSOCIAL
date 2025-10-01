import React, { useState } from 'react';
import { FaEdit, FaBookmark, FaUser, FaTh, FaVideo, FaNewspaper, FaHeart, FaComment, FaEye } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userData = {
    username: 'nitiksh_das',
    fullName: 'NITIKSH_DAS',
    bio: 'औरत सपनों सदा विजयी!\nAI || Deep Learning || LLM',
    website: 'nitiksh_das',
    posts: 9,
    followers: 127,
    following: 443,
    profilePic: 'https://i.pravatar.cc/300?img=50',
    coverImage: 'https://picsum.photos/1200/400?random=1'
  };

  const posts = [
    { id: 1, image: 'https://picsum.photos/400/500?random=1', likes: 245, comments: 34 },
    { id: 2, image: 'https://picsum.photos/400/300?random=2', likes: 512, comments: 67 },
    { id: 3, image: 'https://picsum.photos/400/600?random=3', likes: 389, comments: 45 },
    { id: 4, image: 'https://picsum.photos/400/400?random=4', likes: 678, comments: 89 },
    { id: 5, image: 'https://picsum.photos/400/550?random=5', likes: 234, comments: 23 },
    { id: 6, image: 'https://picsum.photos/400/350?random=6', likes: 891, comments: 112 },
    { id: 7, image: 'https://picsum.photos/400/450?random=7', likes: 456, comments: 56 },
    { id: 8, image: 'https://picsum.photos/400/600?random=8', likes: 234, comments: 28 },
    { id: 9, image: 'https://picsum.photos/400/400?random=9', likes: 567, comments: 78 }
  ];

  const reels = [
    { id: 1, thumbnail: 'https://picsum.photos/300/500?random=10', views: '2.5K', likes: 456 },
    { id: 2, thumbnail: 'https://picsum.photos/300/400?random=11', views: '5.1K', likes: 892 },
    { id: 3, thumbnail: 'https://picsum.photos/300/550?random=12', views: '3.2K', likes: 623 },
    { id: 4, thumbnail: 'https://picsum.photos/300/450?random=13', views: '4.8K', likes: 789 },
    { id: 5, thumbnail: 'https://picsum.photos/300/500?random=14', views: '1.9K', likes: 345 },
    { id: 6, thumbnail: 'https://picsum.photos/300/400?random=15', views: '6.3K', likes: 1023 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How AI is Transforming Indian Healthcare',
      excerpt: 'Exploring the impact of artificial intelligence on healthcare systems across India...',
      image: 'https://picsum.photos/600/300?random=20',
      readTime: '5 min read',
      likes: 342,
      comments: 45,
      date: 'Sep 28, 2025'
    },
    {
      id: 2,
      title: 'Deep Learning: A Beginner\'s Guide',
      excerpt: 'Understanding neural networks and their applications in modern technology...',
      image: 'https://picsum.photos/600/300?random=21',
      readTime: '8 min read',
      likes: 567,
      comments: 78,
      date: 'Sep 25, 2025'
    },
    {
      id: 3,
      title: 'The Future of Large Language Models',
      excerpt: 'Examining the evolution and potential of LLMs in shaping the future of AI...',
      image: 'https://picsum.photos/600/300?random=22',
      readTime: '6 min read',
      likes: 423,
      comments: 56,
      date: 'Sep 20, 2025'
    }
  ];

  return (
    <div className="profile-page">
      {/* Cover Image Section */}
      <div className="profile-cover">
        <img src={userData.coverImage} alt="Cover" />
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-left">
          <div className="profile-picture-wrapper">
            <img src={userData.profilePic} alt={userData.username} className="profile-picture" />
            <div className="note-badge">Note</div>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-top">
            <h1>{userData.username}</h1>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <strong>{userData.posts}</strong> posts
            </div>
            <div className="stat">
              <strong>{userData.followers}</strong> followers
            </div>
            <div className="stat">
              <strong>{userData.following}</strong> following
            </div>
          </div>

          <div className="profile-bio">
            <strong>{userData.fullName}</strong>
            <p>{userData.bio}</p>
            <a href="#" className="bio-link">
              <FaUser /> {userData.website}
            </a>
          </div>

          <div className="profile-actions">
            <button className="edit-profile-btn">Edit profile</button>
            <button className="view-archive-btn">View archive</button>
          </div>
        </div>
      </div>

      {/* New Story Section */}
      <div className="new-story-section">
        <div className="new-story-circle">
          <div className="plus-icon">+</div>
        </div>
        <span>New</span>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <FaTh /> POSTS
        </button>
        <button 
          className={`tab ${activeTab === 'reels' ? 'active' : ''}`}
          onClick={() => setActiveTab('reels')}
        >
          <FaVideo /> REELS
        </button>
        <button 
          className={`tab ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          <FaNewspaper /> ARTICLES
        </button>
        <button 
          className={`tab ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <FaBookmark /> SAVED
        </button>
      </div>

      {/* Content Grid */}
      <div className="profile-content">
        {activeTab === 'posts' && (
          <div className="zigzag-gallery">
            {posts.map((post, index) => (
              <div 
                key={post.id} 
                className={`gallery-item ${index % 2 === 0 ? 'down' : 'up'}`}
              >
                <img src={post.image} alt={`Post ${post.id}`} />
                <div className="overlay">
                  <div className="overlay-content">
                    <span><FaHeart /> {post.likes}</span>
                    <span><FaComment /> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reels' && (
          <div className="zigzag-gallery reels-grid">
            {reels.map((reel, index) => (
              <div 
                key={reel.id} 
                className={`gallery-item reel ${index % 2 === 0 ? 'down' : 'up'}`}
              >
                <img src={reel.thumbnail} alt={`Reel ${reel.id}`} />
                <div className="reel-badge">
                  <FaVideo />
                </div>
                <div className="overlay">
                  <div className="overlay-content">
                    <span><FaEye /> {reel.views}</span>
                    <span><FaHeart /> {reel.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article.id} className="article-item">
                <img src={article.image} alt={article.title} />
                <div className="article-content">
                  <div className="article-meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-stats">
                    <span><FaHeart /> {article.likes}</span>
                    <span><FaComment /> {article.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="empty-state">
            <FaBookmark className="empty-icon" />
            <h3>No saved posts yet</h3>
            <p>Save posts to see them here</p>
          </div>
        )}
      </div>

      {/* Share Photos Section */}
      {activeTab === 'posts' && posts.length === 0 && (
        <div className="share-photos-section">
          <div className="camera-icon">📷</div>
          <h2>Share Photos</h2>
          <p>When you share photos, they will appear on your profile.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
