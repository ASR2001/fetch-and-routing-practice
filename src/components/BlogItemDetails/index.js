import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogItem: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogItem = await response.json()
    const updatedBlogItem = {
      id: blogItem.id,
      title: blogItem.title,
      imageUrl: blogItem.image_url,
      avatarUrl: blogItem.avatar_url,
      author: blogItem.author,
      content: blogItem.content,
      topic: blogItem.topic,
    }
    this.setState({blogItem: updatedBlogItem, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItem
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-details-container">
        <h1 className="blog-details-title">{title}</h1>
        <div className="avatar-and-author-container">
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p className="author">{author}</p>
        </div>
        <img className="blog-details-image" alt="blog" src={imageUrl} />
        <p className="blog-details-content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
