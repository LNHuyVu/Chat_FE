// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../zustand/useConversation";
//
import { useAuthContext } from "../../context/AuthContext";
import useTyping from "../../hooks/useTyping";

//
const MessageInput = () => {
  const { authUser } = useAuthContext();
  console.log("-->", authUser);
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  //

  // eslint-disable-next-line no-unused-vars
  const { selectedConversation, setSelectedConversation } = useConversation();
  const receiverId = selectedConversation._id;
  //
  const { isTyping, userTyping } = useTyping(receiverId);
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    console.log("first message", message);
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        {isTyping && userTyping === receiverId && (
          <p
            className="absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-green-500 transition-colors duration-300 ease-in-out text-white rounded-tr-lg text-sm"
            style={{ top: -32, left: -16 }}
          >
            Đang nhập...
          </p>
        )}
        <input
          type="text"
          id="messageInput"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-white text-white"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="'loading loading-spinber'"></div>
          ) : (
            <BsSend color="white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
