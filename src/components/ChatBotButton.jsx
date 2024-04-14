import { FaRobot } from "react-icons/fa";

const ChatBotButton = () => {
  return (
    <button className="fixed right-0 bottom-12 m-6 bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full">
      <FaRobot className="h-8 w-8" />
    </button>
  );
};

export default ChatBotButton;
