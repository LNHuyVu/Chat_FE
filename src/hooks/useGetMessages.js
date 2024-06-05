import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import fetchApi from "../api/fetchApi";
import { httpComon } from "../utils/http.comon";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetchApi(
          `${httpComon}messages/${selectedConversation._id}`,
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error("Đã có lỗi xảy ra!");
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
