import React, { useState } from 'react';
import '../App.css';
import { FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark, FaEllipsisH } from 'react-icons/fa';

const ArticleCard = ({ article }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="article-card">
      {/* Header */}
      <div className="article-header">
        <div className="author-info">
          <img src={article.authorImage} alt={article.author} className="author-avatar" />
          <div className="author-details">
            <h4>{article.author}</h4>
            <span>{article.timeAgo}</span>
          </div>
        </div>
        <button className="options-btn">
          <FaEllipsisH />
        </button>
      </div>

      {/* Content */}
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        {article.image && (
          <img src={article.image} alt={article.title} className="article-image" />
        )}
        <a href="#" className="read-more">Read More →</a>
      </div>

      {/* Footer */}
      <div className="article-footer">
        <div className="action-buttons">
          <button className={`action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
            {liked ? <FaHeart /> : <FaRegHeart />}
            <span>{likeCount}</span>
          </button>
          
          <button className="action-btn">
            <FaComment />
            <span>{article.comments}</span>
          </button>
          
          <button className="action-btn">
            <FaShare />
            <span>Share</span>
          </button>
        </div>
        
        <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
