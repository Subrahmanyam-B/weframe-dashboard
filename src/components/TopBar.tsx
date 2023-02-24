import Image from "next/image";
import SearchIcon from "@/assets/searchicon.svg";
import EnterIcon from "@/assets/Icon.svg";
import MicIcon from "@/assets/keyboard_voice.svg";
import FolderIcon from "@/assets/folder_open.svg";
import BellIcon from "@/assets/notifications_none.svg";
import AvatarDot from "@/assets/Avatar2.svg";
import MenuOpenIcon from "@/assets/menu_open.svg";
import { motion } from "framer-motion";
import { useState , useContext} from "react";
import MenuContext from "@/context/MenuContext";


type Props = {
};

const TopBar = (props: Props) => {
  const {isOpen , setIsOpen} = useContext(MenuContext);

  const handleClick = () => {
    if(window.innerWidth < 768){
      setIsOpen(!isOpen);
    }
  }

  return (
    <motion.div
      className="py-[24px] sm:pl-[32px] flex justify-around border-b-[1px] w-full max-h-[89px] items-center"
      variants={{
        hidden: {
          y: "-100%",
        },
        show: {
          y: 0,
          transition: {
            delay: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <div className="md:hidden h-full cursor-pointer ">
        <Image alt="close" src={MenuOpenIcon} onClick={()=> setIsOpen(true)}/>
      </div>
      <p className=" md:hidden">Dashboard</p>
      <div className="hidden sm:flex gap-8 items-center">
        <div className="bg-white p-3 border-[1px] rounded-md flex min-h-[44px] overflow-hidden">
          <Image src={SearchIcon} alt="ico" />
          <input
            type="text"
            className="pl-1 outline-none placeholder:font-semibold text-[12px] "
            placeholder="Search Tasks"
          />
          <Image src={EnterIcon} alt="ico" />
        </div>
        <Image src={MicIcon} alt="ico" />
      </div>

      <div className="hidden xl:flex flex-row gap-6 text-[11px] font-semibold items-center text-slate-500 ">
        <a className="cursor-pointer  hover:text-black transition-all duration-300">
          Dashboard
        </a>
        <a className="cursor-pointer  hover:text-black transition-all duration-300">
          My Tasks
        </a>
        <a className="cursor-pointer  hover:text-black transition-all duration-300">
          Reporting
        </a>
        <a className="cursor-pointer  hover:text-black transition-all duration-300">
          Portfolios
        </a>
        <a className="cursor-pointer  hover:text-black transition-all duration-300">
          Goals
        </a>
      </div>
      <div className=" flex gap-6 items-center justify-end px-4 ">
        <Image
          src={FolderIcon}
          alt="ico"
          className="hidden sm:block cursor-pointer"
        />
        <Image
          src={BellIcon}
          alt="ico"
          className="hidden sm:block cursor-pointer"
        />
        <Image src={AvatarDot} alt="ico" className="cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default TopBar;
