import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
const Home = () => {
  return (
    <div>
      <div className="grid justify-items-center">
        <img
          style={{ height: 100 }}
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/1200px-Nextcloud_Logo.svg.png"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg/2560px-Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg.png"
          alt=""
        />
      </div>
      <div className="flex sm:h-[450px] md:h-[550px] rounde-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl shadow-gray-800">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
