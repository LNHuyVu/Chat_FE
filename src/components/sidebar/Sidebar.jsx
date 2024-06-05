import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
  return (
    <div className="border-r border-stale-500 p-4 flex flex-col bg-blue-400">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="flex flex-nowrap mt-auto">
        <LogoutButton />
        <div className="ms-8 text-whit px-2 border-2 border-solid rounded-xl border-green-400 text-white">
          123
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
