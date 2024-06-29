import Advertisement from "./Advertisement"
import Birthdays from "./Birthdays"
import FriendRequest from "./FriendRequest"

const Rightbar = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  )
}
export default Rightbar
