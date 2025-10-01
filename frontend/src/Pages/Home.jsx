import React from 'react';
import Story from '../components/Story';
import Feed from '../components/Feed';
import SuggestedFriend from '../components/SuggestedFriend';

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-feed">
        <Story />
        <Feed />
      </div>
      
      <aside className="sidebar-right">
        <SuggestedFriend />
      </aside>
    </div>
  );
};

export default Home;
