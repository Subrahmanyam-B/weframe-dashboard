import ListItem from "./ListItem";
import UserBox from "./UserBox";
import Image from "next/image";
import InboxIcon from "@/assets/inbox.svg";
import DriveFolderIcon from "@/assets/drive_folder_upload.svg";
import DashboardCustomizeIcon from "@/assets/dashboard_customize.svg";
import ClockIcon from "@/assets/lock_clock.svg";
import AccessTimeIcon from "@/assets/access_time.svg";
import DataUsageIcon from "@/assets/data_usage.svg";
import SpaceDashboardIcon from "@/assets/space_dashboard.svg";
import SellIcon from "@/assets/sell.svg";
import PaymentIcon from "@/assets/payment.svg";
import ImageSearchIcon from "@/assets/image_search.svg";
import TuneIcon from "@/assets/tune.svg";
import ExpandLessIcon from "@/assets/expand_less.svg";
import TagIcon from "@/assets/tag.svg";
import AddCircleIcon from "@/assets/add_circle.svg";
import MenuOpenIcon from "@/assets/menu_open.svg";
import { motion } from "framer-motion";
import { useState , useContext} from "react";
import MenuContext from "@/context/MenuContext";


type Props = {};

const SideBarLeft = (props: Props) => {
  const {isOpen , setIsOpen} = useContext(MenuContext);

  const handleClick = () => {
    if(window.innerWidth < 768){
      setIsOpen(!isOpen);
    }
  }

  return (
    <motion.div
      className="absolute  md:block md:relative z-10 bg-[#F7F8FA] h-screen lg:h-auto overflow-scroll md:overflow-auto md:w-[400px] w-screen border-r-[1px]"
      initial="hidden"
      animate={isOpen ? "show" : "hidden"}
      variants={{
        hidden: {
          x: "-100%",
          transition: {
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",}
        },
        show: {
          x: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="flex border-b-[1px]">
        <div className="text-xl font-semibold py-[30px] px-[32px] flex-grow">
          Dashboard
        </div>
        <div className="h-full m-auto mr-7 cursor-pointer ">
          <Image alt="close" src={MenuOpenIcon} onClick={handleClick} />
        </div>
      </div>
      <UserBox />
      <div className="list mx-6 px-2">
        <div className=" mt-8">
          <div className="text-sm font-bold text-slate-400 w-full flex justify-between">
            <p>DASHBOARDS</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3B82F6"
                d="m11.295 9-4.59 4.59A.996.996 0 1 0 8.115 15l3.89-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41L12.705 9a.996.996 0 0 0-1.41 0Z"
              />
            </svg>
          </div>
          <motion.div
            className="flex flex-col gap-3 mt-6"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <ListItem notifications={10} imageUrl={InboxIcon} title="Inbox" />
            <ListItem notifications={424} imageUrl={DriveFolderIcon} title="Drive Files" />
            <ListItem notifications={5} imageUrl={DashboardCustomizeIcon} title="Boards" />
            <ListItem notifications={0} imageUrl={AccessTimeIcon} title="Updates" />
            <ListItem notifications={2} imageUrl={DataUsageIcon} title="Analytics" />
            <ListItem notifications={0} imageUrl={SpaceDashboardIcon} title="CRM Dashboard" />
            <ListItem notifications={4} imageUrl={SellIcon} title="Ecommerce" />
            <ListItem notifications={0} imageUrl={PaymentIcon} title="Cryptocurrency" />
            <ListItem notifications={0} imageUrl={ClockIcon} title="Projects" />
            <ListItem notifications={0} imageUrl={ImageSearchIcon} title="NFT Marketplace" />
            <ListItem notifications={3} imageUrl={TuneIcon} title="Settings" />
          </motion.div>
        </div>
        <div className="text-sm font-bold text-slate-400 w-full flex justify-between mt-10">
          <p>PROJECTS</p>
          <Image src={ExpandLessIcon} alt="ico" />
        </div>
        <motion.div
          className="flex flex-col gap-3 mt-7 pb-10 mb-[10rem] border-b-[1px]"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07,
                delayChildren: 1.4,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <ListItem notifications={6} imageUrl={TagIcon} title="Additional Calendar" />
          <ListItem notifications={0} imageUrl={TagIcon} title="Brand Logo Design" />
          <ListItem notifications={11} imageUrl={TagIcon} title="User Research" />
          <ListItem notifications={15} imageUrl={TagIcon} title="Marketing Sales" />
          <ListItem notifications={0} imageUrl={TagIcon} title="New Project Template" />
          <ListItem notifications={4} imageUrl={AddCircleIcon} title="Add New Project" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SideBarLeft;
