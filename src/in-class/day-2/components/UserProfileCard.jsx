import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const UserProfileCard = ({
  
}) => {
  return (
    // outer div , background
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      {/* profile card */}

      <div className="max-w-2xl rounded-lg bg-white px-4 py-6 shadow text-center">
        <div className="py-2">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="sara Dole"
            className="h-20 mx-auto rounded-full"
          />
        </div>

        <h2 className="font-bold text-xl">Sara Dole</h2>
        <span className="text-gray-500 py-1 ">
          Front End Engineer @ Microsoft
        </span>
        <p className="max-w-80 py-6">
          I turn code into bugs which are fixed by someoen else, and mostly AI.
          Lorem ipsum,.
        </p>

        <button className="bg-blue-700 text-white w-full py-3 rounded">
          Contact Me
        </button>

        <div className="flex gap-4 py-4 justify-center">
          <span>
            <CiLinkedin size={30} />
          </span>
          <span>
            <FaGithub size={30} />
          </span>
          <span>
            <FaInstagram size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
