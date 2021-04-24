import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blog
    return (
      <Link to={`/blogs/${id}`} className="link">
        <li className="blog-list-item">
          <img src={imageUrl} alt="blog" className="blog-image" />
          <div className="blog-body-container">
            <h1 className="topic">{topic}</h1>
            <h1 className="title">{title}</h1>
            <div className="avatar-and-author-container">
              <img src={avatarUrl} alt="avatar" className="avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
