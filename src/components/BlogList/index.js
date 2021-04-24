import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogList = await response.json()
    const updatedBlogList = blogList.map(blog => ({
      id: blog.id,
      title: blog.title,
      imageUrl: blog.image_url,
      avatarUrl: blog.avatar_url,
      author: blog.author,
      topic: blog.topic,
    }))
    this.setState({blogList: updatedBlogList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogList.map(blog => <BlogItem key={blog.id} blog={blog} />)
        )}
      </ul>
    )
  }
}
export default BlogList
