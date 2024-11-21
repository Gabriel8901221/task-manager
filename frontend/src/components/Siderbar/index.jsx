import {
  faBookOpen,
  faClock,
  faHeart,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full w-80 p-5 flex flex-col gap-14 bg-[#1c0b33]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">Hello,</h2> <h2 className="translate-x-12 text-2xl font-bold">Abacate</h2>
      </div>
      <div className="flex flex-col gap-6">
        <Link className="text-xl font-semibold flex items-center gap-3 hover:bg-gray-500 p-4 rounded-2xl transition">
          <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
        </Link>
        <Link className="text-xl font-semibold flex items-center gap-3 hover:bg-gray-500 p-4 rounded-2xl transition">
          <FontAwesomeIcon icon={faBookOpen} />
          <p>Tasks</p>
        </Link>
        <Link className="text-xl font-semibold flex items-center gap-3 hover:bg-gray-500 p-4 rounded-2xl transition">
          <FontAwesomeIcon icon={faClock} />
          <p>Task with Time</p>
        </Link>
        <Link className="text-xl font-semibold flex items-center gap-3 hover:bg-gray-500 p-4 rounded-2xl transition">
          {" "}
          <FontAwesomeIcon icon={faHeart} /> <p>Taks Favorites</p>
        </Link>
      </div>
      <Link
        to="/"
        className="text-xl font-semibold text-red-600 flex items-center gap-3 p-4 mt-8"
      >
        {" "}
        <FontAwesomeIcon icon={faRightFromBracket} /> <p>Log Out</p>
      </Link>
    </div>
  );
};

export default Sidebar;
