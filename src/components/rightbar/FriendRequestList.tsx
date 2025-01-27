import Image from "next/image"

const FriendRequestList = () => {
  return (
    <div className="">
  {/*   {optimisticRequests.map((request) => ( */}
      <div className="flex items-center justify-between" 
      /* key={request.id} */
      key={1}
      >
        <div className="flex items-center gap-4">
          <Image
          /*   src={request.sender.avatar || "/noAvatar.png"} */
            src={ "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">
           {/*  {request.sender.name && request.sender.surname
              ? request.sender.name + " " + request.sender.surname
              : request.sender.username} */}Niladri
          </span>
        </div>
        <div className="flex gap-3 justify-end">
          <form
          /*  action={() => accept(request.id, request.sender.id)} */
           >
            <button>
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
          <form
        /*    action={() => decline(request.id, request.sender.id)} */
            >
            <button>
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      </div>
   {/*   ))} */}
  
  </div>
  )
}
export default FriendRequestList