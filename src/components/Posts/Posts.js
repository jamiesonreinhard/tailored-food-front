import React from 'react'
import { Link } from 'react-router-dom'
import AboutBanner from '../About/AboutBanner';
import { ReadableDate } from '../helpers'

import usePosts from '../../custom-hooks/usePosts'

const Posts = () => {
  const [posts, isLoading] = usePosts()

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map(post => (
      <Link
        className="posts-card"
        key={post.fields.slug}
        to={`/posts/${post.fields.slug}`}
      >
        <div className="">
          <img
            className="posts-card-image mr-3"
            src={post.fields.featuredImage.fields.file.url}
            alt={ReadableDate(post.fields.title)}
          />
        </div>
        <div>
          <small>
          {(post.fields.date)}
          </small>
          <h3>{post.fields.title}</h3>
        </div>
      </Link>
    ))
  }

  return (
    <>
      <AboutBanner />
      <div className="container">
        <h2 className="mb-5">Blog Posts</h2>
        <div className="posts">
          <div className="posts-grid">{renderPosts()}</div>
        </div>
      </div>
    </>
  )
}

export default Posts;
