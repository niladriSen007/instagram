import Image from "next/image"
import { Suspense } from "react"
import PostInfo from "./PostInfo"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            /*  src={post.user.avatar || "/noAvatar.png"} */
            src="https://images.unsplash.com/photo-1718134292837-ce1963ed20ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          {/* <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span> */}
          <span>Niladri</span>
        </div>
        {/*  {userId === post.user.id && <PostInfo postId={post.id} />} */}
      {true && <PostInfo postId={12} />}
      </div>


      <div className="flex flex-col gap-4">
      <p>psehgcvwuevc  wcwegcgwecwge c wcwgydywegdiuwgediuyw eduwyevcuwcwedygwuegd</p>
     {/*    {post.img && ( */}
          <div className="w-full min-h-96 relative">
            
            <Image
              /* src={post.img} */
              src={"https://images.unsplash.com/photo-1719300249973-92d86b40f0a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
       {/*   )} */} 
        {/* <p>{post.desc}</p> */}
        
      </div>

      <Suspense fallback="Loading...">
        {/* <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        /> */}
      </Suspense>
      <Suspense fallback="Loading...">
       {/*  <Comments postId={post.id} /> */}
      </Suspense>
    </div>
  )
}
export default Post
