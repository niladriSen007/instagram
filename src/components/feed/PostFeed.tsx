import { lazy } from "react"

const Post = lazy(() => import('./Post'))

const PostFeed = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
  </div>
  )
}
export default PostFeed