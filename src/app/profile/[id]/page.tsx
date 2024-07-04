import PostFeed from "@/components/feed/PostFeed"
import Leftbar from "@/components/leftbar/Leftbar"
import Rightbar from "@/components/rightbar/Rightbar"

const Profile = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <Leftbar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">

          <PostFeed />
        </div>{" "}
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightbar userId={"123"} />
      </div>
    </div>
  )
}
export default Profile