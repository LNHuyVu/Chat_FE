import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";

const useTyping = (receiverId) => {
  const { socket } = useSocketContext();
  const [isTyping, setIsTyping] = useState(false);
  const [userTyping, setUserTyping] = useState();

  useEffect(() => {
    if (!socket) return;

    const handleInput = () => {
      socket.emit("typing", { receiverId });
    };

    const messageInput = document.getElementById("messageInput");
    if (messageInput) {
      messageInput.addEventListener("input", handleInput);
    }

    return () => {
      if (messageInput) {
        messageInput.removeEventListener("input", handleInput);
      }
    };
  }, [socket, receiverId]);

  useEffect(() => {
    if (!socket) return;

    const typingListener = (data) => {
      const { userId } = data;
      setIsTyping(true);
      setUserTyping(userId);

      // Reset trạng thái "đang gõ" sau một khoảng thời gian
      setTimeout(() => setIsTyping(false), 2000);
    };

    socket.on("typing", typingListener);

    return () => {
      socket.off("typing", typingListener);
    };
  }, [socket]);

  return { isTyping, userTyping };
};

export default useTyping;
