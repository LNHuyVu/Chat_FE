import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { httpComon } from "../utils/http.comon";
import fetchApi from "../api/fetchApi";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    console.log("Token", token);
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetchApi(httpComon + "users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log("Token", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};
export default useGetConversations;
