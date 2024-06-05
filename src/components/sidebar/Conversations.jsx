import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations", conversations, loading);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((item, idx) => {
        return (
          <div key={item._id}>
            <Conversation
              conversation={item}
              lastIdx={idx === conversations.length - 1}
            />
          </div>
        );
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
