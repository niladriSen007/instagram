import { lazy } from "react"
const Leftbar = lazy(() => import("@/components/leftbar/Leftbar"))
const Rightbar = lazy(() => import("@/components/rightbar/Rightbar"))
const AddPost = lazy(() => import("@/components/content/AddPost"))
const PostFeed = lazy(() => import("@/components/feed/PostFeed"))
const Stories = lazy(() => import("@/components/content/Stories"))

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <Leftbar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <PostFeed />
        </div>{" "}
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightbar />
      </div>
    </div>
  )
}

export default Homepage
