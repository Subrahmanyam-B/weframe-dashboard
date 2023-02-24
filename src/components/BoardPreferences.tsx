import React from "react";
import Image from "next/image";
import Icon1 from "@/assets/Icon1.svg";
import Icon2 from "@/assets/Icon2.svg";
import Icon3 from "@/assets/Icon3.svg";
import Icon4 from "@/assets/Icon4.svg";
import Icon5 from "@/assets/Icon5.svg";
import TwitterIcon from '@/assets/twitter.svg'
import Lock from "@/assets/lock.svg"
import DownArrow from "@/assets/keyboard_arrow_down.svg"
import BoardViewIcon from "@/assets/board_view.svg"
import ListViewIcon from "@/assets/list_view.svg"
import { motion } from "framer-motion";

type Props = {};

const BoardPreferences = (props: Props) => {
  return (
    <motion.div className="flex flex-col items-center gap-2 sm:grid sm:px-10 sm:grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row xl:justify-between px-8 "
    initial={{opacity : 0}}
    animate={{opacity : 1,
      transition : {
        delay : 1.2
      }
    }}>
      <div className=" hidden sm:flex max-w-[220px] bg-white rounded-lg border-[1px] shadow-sm shadow-slate-200 text-[12px] font-bold text-[#606C80] cursor-pointer">
        <div className="flex items-center gap-2 border-r-[1px] p-2 bg-gray-100"><Image src={BoardViewIcon} alt='ico'/><p>Board View</p></div>
        <div className="flex items-center gap-2 px-2 "><Image src={ListViewIcon} alt='ico'/><p>List View</p></div>
      </div> 
      <div className="flex gap-3 border-x-[1px] px-3 items-center sm:justify-self-end">
        <Image src={Lock} alt="ico"/>
        <p className="text-[12px] text-[#98A2B2] font-semibold ">Limited Access</p>
        <Image src={DownArrow} alt="ico"/>
      </div>
      <div className="flex gap-2 text-[12px] font-semibold items-center text-[#98A2B2] md:justify-self-end">
        <p>Owners</p>
        <Image src={TwitterIcon} alt="ico"/>
        <p className="text-[#606C80]">Twitter Team</p>
      </div>
      <div className="bg-white p-3 border-[1px] rounded-md hidden md:col-span-2 md:flex max-h-8 md:max-w-[120px] overflow-clip  items-center mr-2">
        <input type="text"
            className="pl-1 outline-none placeholder:font-semibold text-[12px] flex"
            placeholder="Search Tasks" />
      </div>
      <motion.div className="flex gap-2 sm:justify-self-end "
      initial="hidden"
      animate="show"
      variants={{
          hidden: { opacity: 0 },
          show: { 
          opacity: 1,
          transition : {
            staggerChildren :0.1,
            delayChildren : 1.4
          }
        },
      }}
      >
        <motion.button
          className="h-8 bg-white w-8 border-[1px] rounded-lg shadow-sm flex items-center justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <Image src={Icon5} alt="button" />
        </motion.button>
        <motion.button
          className="h-8 bg-white w-8 border-[1px] rounded-lg shadow-sm flex items-center justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <Image src={Icon1} alt="button" />
        </motion.button>
        <motion.button
          className="h-8 bg-white w-8 border-[1px] rounded-lg shadow-sm flex items-center justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <Image src={Icon2} alt="button" />
        </motion.button>
        <motion.button
          className="h-8 bg-white w-8 border-[1px] rounded-lg shadow-sm flex items-center justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <Image src={Icon3} alt="button" />
        </motion.button>
        <motion.button
          className="h-8 bg-white w-8 border-[1px] rounded-lg shadow-sm flex items-center justify-center"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <Image src={Icon4} alt="button" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BoardPreferences;
