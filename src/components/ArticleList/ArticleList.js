import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = ({ articles }) => { 
 
  
  const articleCards = articles.map((article, index) => {
    return (
      <ArticleCard 
        key={index}
        id={article.id}
        title={article.title}
        abstract={article.abstract}
        multimedia={article.multimedia}
        url={article.url}
      />
    )
  })
  return (
   
      <div className='article-list'>
        {articleCards}
      </div>
  )
}

export default ArticleList;