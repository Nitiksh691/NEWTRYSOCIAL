import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../Pages/Home';
import Header from '../components/Header';
import Profile from '../Pages/Profile/profile';
import ArticleEditor from '../Pages/Editor/ArticleEditor';
import ArticlePage from '../Pages/Editor/ArticlePage';

// Layout component that wraps Header (Sidebar) and content
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        {children}
      </div>
    </>
  );
};

const AppRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path='/login' element={<Login />} />
        
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/profile' element={<Layout><Profile /></Layout>} />
        <Route path='/editor' element={<Layout><ArticleEditor/></Layout>} />
        <Route path='/article' element={<Layout><ArticlePage/></Layout>} />
        {/* <Route path='/article/:id' element={<Layout><ArticlePage /></Layout>} /> */}

      </Routes>
    </Router>
  );
};

export default AppRoute;
