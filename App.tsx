import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import CreateNewsletter from './pages/CreateNewsletter';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/createnewsletter" element={<CreateNewsletter />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;