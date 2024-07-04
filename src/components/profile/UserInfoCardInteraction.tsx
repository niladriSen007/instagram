const UserInfoCardInteraction = () => {
  return (
    <>
      <form
      /*  action={follow} */
      >
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {
            /*   optimisticState.following */ true
              ? "Following"
              : /*   optimisticState.followingRequestSent */
              false
              ? "Friend Request Sent"
              : "Follow"
          }
        </button>
      </form>
      <form
        /*  action={block} */
        className="self-end "
      >
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {/* optimisticState.blocked */ true ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  )
}
export default UserInfoCardInteraction
