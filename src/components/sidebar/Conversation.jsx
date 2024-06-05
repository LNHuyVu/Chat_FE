/* eslint-disable react/prop-types */
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="flex flex-row items-center">
          <div className="basis-1/5">
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="w-12 rounded-full p-2">
                <img src="./picture/folder.png" />
                {/* <img src={conversation.profilePic} alt="" /> */}
              </div>
            </div>
          </div>
          <div className="basis-3/5">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
          <div className="basis-1/5 text-end">
            <span className="texr-xl">😈</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
