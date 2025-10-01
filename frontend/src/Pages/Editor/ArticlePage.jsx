import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShare, FaBookmark, FaRetweet } from 'react-icons/fa';
import "../../App.css"

const DEFAULT_ARTICLES = [
  {
    id: "1",
    title: "The Dawn of the Indian AI Revolution: 2025 and Beyond",
    cover: "https://picsum.photos/800/350?random=42",
    content: [
      "India is witnessing a profound transformation powered by artificial intelligence. From healthcare to education, startups across the country are leveraging deep learning to solve local problems at scale.",
      "One inspiring story is from a Bangalore-based healthtech startup that developed an AI-powered diagnosis tool for rural clinics, reducing the time for early detection by 70%.",
      "Meanwhile, Indian engineers are making breakthroughs in natural language processing, enabling millions to interact with technology in their own languages."
    ],
    likes: 2312,
    views: 40500
  },
  {
    id: "2",
    title: "Startup Funding Boom 2025: Opportunities & Challenges",
    cover: "https://picsum.photos/800/350?random=55",
    content: [
      "2025 marks a watershed moment for Indian startups, with unprecedented funding flowing into SaaS and fintech. But with high growth comes high expectations.",
      "We talk to founders who raised $50M+ rounds, and learn what it takes to build resilient teams in a hyper-competitive landscape.",
      "Key takeaway: Execution and culture are as important as vision."
    ],
    likes: 900,
    views: 20900
  },
  {
    id: "3",
    title: "Cricket World Cup 2025: India’s Winning Formula",
    cover: "https://picsum.photos/800/350?random=86",
    content: [
      "With fresh talent and innovative strategies, India’s cricket team stormed into the 2025 World Cup finals.",
      "Star players trained with sports analytics startups to fine-tune their performance. AI-driven match prediction helped coaches devise new game plans.",
      "Will 2025 go down as a golden year in Indian cricket history?"
    ],
    likes: 620,
    views: 9500
  }
];

export default function ArticlePage({ articles = DEFAULT_ARTICLES }) {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id) || articles[0];
  const trending = articles.filter(a => a.id !== article.id).slice(0, 3);

  // User interaction states
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes || 42);
  const [comments, setComments] = useState([
    { user: "Jane", text: "Fantastic article 👏", id: 1 }
  ]);
  const [newComment, setNewComment] = useState("");

  // Handlers
  const handleComment = () => {
    if (newComment) {
      setComments(cs => [
        ...cs, { user: "You", text: newComment, id: Date.now() }
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="article-view-layout">
      <main className="article-main">
        {/* ARTICLE */}
        <div className="article-reader-card">
          {article.cover && (
            <img src={article.cover} alt="cover" className="article-coverimg" />
          )}
          <div className="article-title">{article.title}</div>
          <div className="article-body">
            {article.content
              ? (Array.isArray(article.content)
                  ? article.content.map((para, i) => <p key={i}>{para}</p>)
                  : <p>{article.content}</p>)
              : <i>No content</i>}
          </div>
          <div className="article-actionsbar">
            <button onClick={() => {
              setLiked(l => !l);
              setLikeCount(l => l + (liked ? -1 : 1));
            }}>
              {liked ? <FaHeart color="#f44" /> : <FaRegHeart />}
              {likeCount}
            </button>
            <button title="Repost"><FaRetweet /></button>
            <button><FaShare /></button>
            <button onClick={() => setSaved(s => !s)}>
              <FaBookmark color={saved ? "#ff7" : "#fff"} />
            </button>
          </div>
        </div>
        {/* COMMENTS */}
        <div className="article-comments-section">
          <h3>Comments</h3>
          <ul>
            {comments.map(c => (
              <li key={c.id}><b>{c.user}:</b> {c.text}</li>
            ))}
          </ul>
          <div className="comment-input-row">
            <input
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={handleComment}>Post</button>
          </div>
        </div>
      </main>
      {/* SIDEBAR */}
      <aside className="article-sidebar">
        <h3>Relevant</h3>
        {trending.map(rel => (
          <div key={rel.id} className="related-article-card">
            {rel.cover && (
              <img src={rel.cover} alt="cover" className="rel-thumb" />
            )}
            <div>
              <div className="rel-title">{rel.title}</div>
              <div className="rel-meta">{(rel.views || "2k") + " views"}</div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
