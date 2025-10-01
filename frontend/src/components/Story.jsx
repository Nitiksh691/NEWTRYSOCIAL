import React, { useRef } from 'react';
import '../App.css';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';

const Story = () => {
  const scrollRef = useRef(null);

  const stories = [
    { id: 1, username: 'Your Story', image: 'https://i.pravatar.cc/150?img=1', isOwn: true, hasStory: false },
    { id: 2, username: 'rahul_sharma', image: 'https://i.pravatar.cc/150?img=2', hasNewStory: true },
    { id: 3, username: 'priya_singh', image: 'https://i.pravatar.cc/150?img=3', hasNewStory: true },
    { id: 4, username: 'amit_kumar', image: 'https://i.pravatar.cc/150?img=4', hasNewStory: true },
    { id: 5, username: 'neha_gupta', image: 'https://i.pravatar.cc/150?img=5', hasNewStory: false },
    { id: 6, username: 'vikas_raj', image: 'https://i.pravatar.cc/150?img=6', hasNewStory: true },
    { id: 7, username: 'anjali_das', image: 'https://i.pravatar.cc/150?img=7', hasNewStory: true },
    { id: 8, username: 'rohan_joshi', image: 'https://i.pravatar.cc/150?img=8', hasNewStory: false },
    { id: 9, username: 'sneha_verma', image: 'https://i.pravatar.cc/150?img=9', hasNewStory: true },
    { id: 10, username: 'karan_mehta', image: 'https://i.pravatar.cc/150?img=10', hasNewStory: true },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="stories-section">
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>
      
      <div className="stories-container" ref={scrollRef}>
        {stories.map((story) => (
          <div key={story.id} className="story-item">
            <div className={`story-avatar ${story.isOwn ? 'own-story' : story.hasNewStory ? 'new-story' : 'seen-story'}`}>
              <img src={story.image} alt={story.username} />
              {story.isOwn && !story.hasStory && (
                <div className="add-story-icon">
                  <FaPlus />
                </div>
              )}
            </div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Story;
