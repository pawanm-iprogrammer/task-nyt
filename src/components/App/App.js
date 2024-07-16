import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import Footer from '../Footer/Footer';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import { getArticleList } from '../../services/homeServices';

const App = () => {
  const [articles, setArticles] = useState([]);

  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticleList();
        console.log({response})
        setArticles(response.data.results);
      } catch (error) {
        console.error('Error fetching the articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
      <div className='app-container'>
        <Header />
        
        <Route exact path='/'>
        <>
        </>
          <ArticleList 
            articles={articles} 
          />
        </Route>

        <Route 
          exact path='/article/:id' 
          render={({ match }) => {
            return (
              <ArticleDetail 
                id={match.params.id}
                articles={articles}
              />
            )
          }}
        />
        <Footer />
      </div>
    
  )
}

export default App;
