import React from 'react';
import '../App.css';

const SuggestedFriend = () => {
  const suggestions = [
    {
      id: 1,
      username: 'rohit_kaizen',
      name: 'Rohit Kaizen',
      avatar: 'https://i.pravatar.cc/150?img=30',
      mutualFriends: 'Followed by jayesh + 12 others'
    },
    {
      id: 2,
      username: 'instagram',
      name: 'Instagram',
      avatar: 'https://i.pravatar.cc/150?img=31',
      mutualFriends: 'Followed by myspace + 24 others',
      verified: true
    },
    {
      id: 3,
      username: 'palak_sharma',
      name: 'Palak Sharma',
      avatar: 'https://i.pravatar.cc/150?img=32',
      mutualFriends: 'Followed by bhavay + 8 others'
    },
    {
      id: 4,
      username: 'harsh_29058',
      name: 'Harsh Gupta',
      avatar: 'https://i.pravatar.cc/150?img=33',
      mutualFriends: 'Followed by i.s.h.a.n + 2 others'
    },
    {
      id: 5,
      username: 'arvindkalia_official',
      name: 'Arvind Kalia',
      avatar: 'https://i.pravatar.cc/150?img=34',
      mutualFriends: 'Suggested for you'
    }
  ];

  return (
    <div className="suggested-friends">
      <div className="suggested-header">
        <h3>Suggested for you</h3>
        <a href="#" className="see-all-link">See All</a>
      </div>
      
      <div className="suggestions-list">
        {suggestions.map((user) => (
          <div key={user.id} className="suggestion-item">
            <img src={user.avatar} alt={user.name} className="suggestion-avatar" />
            <div className="suggestion-info">
              <h4>{user.username}</h4>
              <p>{user.mutualFriends}</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>

      <div className="footer-links">
        <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Press</a> • <a href="#">API</a> • <a href="#">Jobs</a> • <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Locations</a> • <a href="#">Language</a>
        <p className="copyright">© 2025 FORBHARAT FROM INDIA</p>
      </div>
    </div>
  );
};

export default SuggestedFriend;
