import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const UserProfileCard = ({ name, role, intro, image, linkedin, github, instagram }) => {
  return (
    // outer div , background
    <div className="max-w-100 rounded-lg  px-4 py-6 shadow text-center mt-2">
      <div className="py-2">
        <img
          src={image !== undefined ? image : "https://i.pravatar.cc/300" }
          alt="sara Dole"
          className="h-20 mx-auto rounded-full"
        />
      </div>

      <h2 className="font-bold text-xl">{name}</h2>
      <span className="text-gray-500 py-1 ">{role}</span>
      <div className="flex justify-center">
        <p className="max-w-80 py-6 text-center">{intro}</p>
      </div>

      <button className="bg-blue-700 text-white w-full py-3 rounded">
        Contact Me
      </button>

      <div className="flex gap-4 py-4 justify-center">
        <span>
            <a href={linkedin} target="_blank">

          <CiLinkedin size={30} />
            </a>
        </span>
        <span>
            <a href={github} target="_blank">

          <FaGithub size={30} />
            </a>
        </span>
        <span>
            <a href={instagram} target="_blank">

          <FaInstagram size={30} />
            </a>
        </span>
        
      </div>
    </div>
  );

};


// named export 
// export const nameOfUser = "sdfasdf"

// export const add = (a, b) => {
//    return  a + b
// }

// named export 
// export {add, nameOfUser}


// default export 
export default UserProfileCard;
