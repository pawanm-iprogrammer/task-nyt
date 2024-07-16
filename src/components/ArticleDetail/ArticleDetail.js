import { Link } from 'react-router-dom';

const ArticleDetail = ({ articles, id }) => {
  const selectedArticle = articles.find(article => article.id == id)
  // const { title, abstract, byline, multimedia, section, subsection, short_url, updated_date } = selectedArticle
  return(
    <div className='details-viewpage'>
      <div className='back-btn-container'>
        <Link to='/'>
          <button className='back-btn'>Go Back</button>
        </Link>

      </div>
      <div className='article-details'>
        <div className='details-container'>
          <h1>{selectedArticle?.title}</h1>
          <p>{selectedArticle?.abstract}</p>
          <a className='article-link' href={selectedArticle?.url} target='_blank'>Read More...</a>
          <p>{selectedArticle?.byline}</p>
          <p>{selectedArticle?.updated_date}</p>
          <p>{selectedArticle?.section} {selectedArticle?.subsection}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail;