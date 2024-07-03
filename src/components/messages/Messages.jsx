import { useEffect, useRef, useState } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();

  // State để theo dõi sự thay đổi trong danh sách messages
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setShouldScrollToBottom(false);
    }, 100);
  }, [messages, shouldScrollToBottom]);
  // Effect để đảm bảo cuộn xuống cuối khi ban đầu tải dữ liệu
  useEffect(() => {
    if (!loading && messages.length > 0) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading, messages]);
  return (
    <div className="px-4 flex-1 overflow-auto bg-info">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />;
            </div>
          );
        })}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Hãy nhắn tin để bắt đầu</p>
      )}
    </div>
  );
};

export default Messages;
