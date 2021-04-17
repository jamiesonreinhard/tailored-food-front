import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MD from 'react-markdown'
import AboutBanner from '../About/AboutBanner'

import useSinglePost from '../../custom-hooks/useSinglePost'

const SinglePost = () => {
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>
    console.log(post);
    

    return (
      <>
         <img
            className="singlePostImage"
            src={post.featuredImage.fields.file.url}
            alt={post.title}
          />
        <div className="">
          <h2 className="">{post.title}</h2>
          <small className="">{post.date}</small>
        </div>
        <div>{post.content}</div>
        <div className="">
          <MD source={post.content} />
        </div>
      </>
    )
  }

  return (
    <>
    <AboutBanner />
    <div className="container">
      <Link className="post__back" to="/posts">
        {'<< Back'}
      </Link>

      {renderPost()}
    </div>
    </>
  )
}

export default SinglePost;
