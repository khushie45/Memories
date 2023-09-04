import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'

function AllPosts() {
  const classes = useStyles()
  return (
    <>
      <h1>AllPosts</h1>
      <Post />
      <Post />
    </>
  )
}

export default AllPosts