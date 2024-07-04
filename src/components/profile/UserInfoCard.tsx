import Image from "next/image"
import Link from "next/link"
import UserInfoCardInteraction from "./UserInfoCardInteraction"

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {/* {currentUserId === user.id ? (
        <UpdateUser user={user}/>
      ) : ( */}
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
        {/* )}  */}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            {/*   {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username} */}
            Niladri
          </span>
          {/*      <span className="text-sm">@{user.username}</span> */}
          <span className="text-sm">@Niladri</span>
        </div>
        {/*    {user.description && <p>{user.description}</p>} */}
        {/* {user.city && ( */}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            {/*   Living in <b>{user.city}</b> */}
            Living in <b>Madhyamgram</b>
          </span>
        </div>
        {/*   )} */}
        {
          /* user.school */ true && (
            <div className="flex items-center gap-2">
              <Image src="/school.png" alt="" width={16} height={16} />
              <span>
                Went to{" "}
                <b>
                  {/* {user.school} */}
                  New Barrackpore Boy&#39;s High School
                </b>
              </span>
            </div>
          )
        }
        {
          /* user.work */ true && (
            <div className="flex items-center gap-2">
              <Image src="/work.png" alt="" width={16} height={16} />
              <span>
                Works at{" "}
                <b>
                  {/*  {user.work} */}
                  Tata Consultancy Services
                </b>
              </span>
            </div>
          )
        }
        <div className="flex items-center justify-between">
          {
            /*  user.website */ true && (
              <div className="flex gap-1 items-center">
                <Image src="/link.png" alt="" width={16} height={16} />
                <Link
                  /* href={user.website} */
                  href={"#"}
                  className="text-blue-500 font-medium"
                >
                  {/*  {user.website} */} niladri.vercel.com
                </Link>
              </div>
            )
          }
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>
              Joined
              {/* {formattedDate} */}
              13/03/2023
            </span>
          </div>
        </div>
        {/*    {currentUserId && currentUserId !== user.id && ( */}
        <UserInfoCardInteraction
        /*  userId={user.id}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent} */
        />
        {/*    )}  */}
      </div>
    </div>
  )
}
export default UserInfoCard
