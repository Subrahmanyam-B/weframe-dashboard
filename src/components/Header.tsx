import Avatar6 from "@/assets/Avatar6.svg";
import Avatar3 from "@/assets/Avatar3.svg";
import Avatar4 from "@/assets/Avatar4.svg";
import Avatar5 from "@/assets/Avatar5.svg";
import OtherIcon from "@/assets/Other.svg";
import AddButton from "@/assets/add-button.svg";
import EditIcon from "@/assets/edit.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col xl:flex-row  gap-8 p-8 items-center justify-between -z-20"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: [0, 0 , 0, 0, 1],
          transition: {
            delay: 0.8,
            duration: 0.6,
            // ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <div>
        <h1 className="text-3xl flex text-[#1F2633] font-bold items-center gap-4">
          Task Boards{" "}
          <span>
            <Image width={20} height={20} src={EditIcon} alt="edit" />
          </span>
        </h1>
      </div>
      <div className="flex gap-3 sm:gap-7 font-semibold text-[11px]">
        <p className="text-[#3B82F6] cursor-pointer pb-3 border-b-2 border-b-[#3B82F6]">
          Timeline
        </p>
        <p className="text-[#7A8699] cursor-pointer pb-3">Calendar</p>
        <p className="text-[#7A8699] cursor-pointer pb-3">Dashboard</p>
        <p className="text-[#7A8699] cursor-pointer pb-3">Progress</p>
        <p className="text-[#7A8699] cursor-pointer pb-3">Forms</p>
        <p className="text-[#7A8699] cursor-pointer pb-3">More</p>
      </div>
      <div className="flex gap-2">
        <div className="flex -space-x-4  max-w-[150px]">
          <Image
            src={Avatar6}
            alt="avatar"
            className="border-3 border-white rounded-full"
          />
          <Image
            src={Avatar3}
            alt="avatar"
            className="border-3 border-white rounded-full"
          />
          <Image
            src={Avatar4}
            alt="avatar"
            className="border-3 border-white rounded-full"
          />
          <Image
            src={Avatar5}
            alt="avatar"
            className="border-3 border-white rounded-full"
          />
          <Image
            src={OtherIcon}
            alt="avatar"
            className="border-3 border-white rounded-full"
          />
        </div>
        <Image src={AddButton} alt="avatar" />
      </div>
    </motion.div>
  );
};

export default Header;
