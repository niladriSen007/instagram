import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        /*  src={user?.imageUrl || "/noAvatar.png"} */
        src={
          "https://images.unsplash.com/photo-1719216323699-79e62fbc6a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
        }
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex gap-4 ">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div
            className="flex items-center gap-2 cursor-pointer"
          
          >
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddPost
