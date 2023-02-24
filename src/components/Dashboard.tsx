import Header from "./Header";
import TopBar from "./TopBar";
import Image from "next/image";
import AddCard from "@/assets/add_card.svg";
import ThreeDots from "@/assets/more_horiz.svg";
import Card from "./Card";
import BoardPreferences from "./BoardPreferences";
import { motion } from "framer-motion";
import Avatar3 from "@/assets/Avatar3.svg";
import Avatar4 from "@/assets/Avatar4.svg";
import Avatar5 from "@/assets/Avatar5.svg";
import Avatar6 from "@/assets/Avatar6.svg";
import Avatar7 from "@/assets/Avatar7.svg";
import Avatar8 from "@/assets/Avatar8.svg";
import Avatar9 from "@/assets/Avatar9.svg";
import MenuContext from "@/context/MenuContext";
import { useContext } from "react";


type Props = {};

const Dashboard = (props: Props) => {

  const {isOpen , setIsOpen} = useContext(MenuContext);

  const overflow = isOpen ? "overflow-hidden h-screen lg:h-auto" : "overflow-scroll";
  
  return (
    <div className={`flex-grow ${overflow}`}>
      <TopBar />
      <Header />
      <BoardPreferences />
      <motion.div
        className="mt-10 ml-8 grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 "
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.07,
              delayChildren: 2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className=" pr-5"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
        >
          <ColumnHeading title="Backlog Tasks" color='#EAB308' notifications={4} />
          <motion.div
            className=""
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <Card people={[Avatar6, Avatar4, Avatar5, Avatar6, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Model Answer" />
            <Card people={[Avatar8, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Create calendar, chat and email app messages" />
            <Card people={[Avatar3, Avatar9, Avatar5, Avatar6, Avatar4]} tags={["Backlog", "Done"]} title="Product Design, Figma, Sketch (Software), Prototype" />
            <Card people={[Avatar4, Avatar7, Avatar5, Avatar6, Avatar4]} tags={["Backlog", "Done"]} title="Change email option process" />
            <Card people={[Avatar9, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Post launch reminder/ Post list" />
            <AddButton />
          </motion.div>
        </motion.div>
        <motion.div
          className=" pr-5"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
        >
          <ColumnHeading title="To Do Tasks" color='#9333EA' notifications={4} />
          <motion.div
            className=""
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <Card people={[Avatar6, Avatar4, Avatar5, Avatar6, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Model Answer" />
            <Card people={[Avatar4, Avatar5, Avatar6]} tags={["Backlog", "Done"]} title="Add authentication pages" />
            <Card people={[Avatar9, Avatar4, Avatar5, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Profile Page Satructure" />
            <Card people={[Avatar7, Avatar6, Avatar5]} tags={["Backlog", "Done"]} title="Create calendar, chat and email app pages" />
            <AddButton />
          </motion.div>
        </motion.div>
        <motion.div
          className=" pr-5"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
        >
          <ColumnHeading title="In Progress" color='#EAB308' notifications={4} />
          <motion.div
            className=""
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <Card people={[Avatar9, Avatar4, Avatar5, Avatar4, Avatar5]} tags={["Backlog", "Done"]} title="Model Answer" />
            <Card people={[Avatar3, Avatar9]} tags={["Backlog", "Done"]} title="Model Answer" />
            <AddButton />
          </motion.div>
        </motion.div>
        <motion.div
          className=" pr-5"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
            },
          }}
        >
          <ColumnHeading title="Done" color='#9333EA' notifications={4}/>
          <motion.div
            className=""
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 2,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <Card people={[Avatar6, Avatar5, Avatar5, Avatar7, Avatar6, Avatar5]} tags={["Backlog", "Done"]} title="Model Answer" />
            <Card people={[Avatar7, Avatar6, Avatar5]} tags={["Backlog", "Done"]} title="Create calendar, chat and email app pages" />
            <Card people={[Avatar8, Avatar7, Avatar5,Avatar7, Avatar6]} tags={["Backlog", "Done"]} title="Product Design, Figma, Sketch (Software), Prototype" />
            <Card people={[Avatar9, Avatar8, Avatar5 , Avatar7, Avatar6, Avatar5, Avatar7, Avatar6, Avatar5]} tags={["Backlog", "Done"]} title="Model Answer" />
            <Card people={[Avatar3, Avatar9]} tags={["Backlog", "Done"]} title="Model Answer" />
            <AddButton />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

const ColumnHeading = ({ title , color , notifications }: { title: string , color : string , notifications : number}) => {
  return (
    <div className=" flex font-semibold text-[14px] mb-10 justify-between">
      <div className=" flex items-center ">
      <p >{title}</p>
      <p className={`mx-2 h-7 w-7 items-center flex justify-center rounded-full bg-[${color}] bg-opacity-10 text-[${color}]`}>{notifications}</p>
      </div>
      <Image src={ThreeDots} alt="more" className="" />
    </div>
  );
};

const AddButton = () => {
  return (
    <div className="cursor-pointer bg-white flex items-center justify-center rounded-xl p-2 mt-3 mb-8 shadow-sm shadow-slate-300">
      <Image src={AddCard} alt="Add Card" />
    </div>
  );
};
