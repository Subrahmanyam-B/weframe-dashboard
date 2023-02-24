import MessageIcon from "@/assets/message.svg";
import TaskIcon from "@/assets/task.svg";
import FileIcon from "@/assets/file_present.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  tags: string[];
  people : string[]
  title: string;
};

const Card = (props: Props) => {
  const [colors, setColors] = useState<string[]>([]);

  const tagColorsPreset = {
    Design: "#2563EB",
    Backlog: "#9333EA",
    ToDo: "#DB2777",
    InProcess: "#9333EA",
    Development: "#DB2777",
    Done: "#16A34A",
    Other: "#2563EB",
  };

  const getTagColors = (tag: string[]) => {
    const colors = tag.map((item) => {
      if (item === "Design") return tagColorsPreset.Design;
      else if (item === "Backlog") return tagColorsPreset.Backlog;
      else if (item === "To Do") return tagColorsPreset.ToDo;
      else if (item === "InProcess") return tagColorsPreset.InProcess;
      else if (item === "Development") return tagColorsPreset.Development;
      else if (item === "Done") return tagColorsPreset.Done;
      else return tagColorsPreset.Other;
    });
    return colors;
  };
  useEffect(() => {
    setColors(getTagColors(props.tags));
  }, []);

  return (
    <motion.div
      className="bg-white rounded-xl p-4 shadow-sm shadow-slate-300 mt-3 "
      variants={{
        hidden: { y: "100%", opacity: 0 },
        show: {
          y: 0,
          opacity: [0, 0, 0, 1],
          transition: {
            times: [0, 0.2, 0.8, 1],
            duration: 1,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="font-semibold text-[12px] flex gap-3">
        <p className="flex-grow">{props.title}</p>
        <Image src={TaskIcon} alt="ico" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        {props.tags.map((item, index) => (
          <Tag key={index} color={colors[index]} title={item} />
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        <People people={props.people} />
        <div className="flex font-bold text-[12px] items-center gap-2">
          <Image src={FileIcon} alt="ico" />
          <p className="text-[#9333EA]">2</p>
          <Image src={MessageIcon} alt="ico" />
          <p className="text-[#D97706]">3</p>
        </div>
      </div>
    </motion.div>
  );
};

const Tag = (props: { color: string; title: string }) => {
  return (
    <div
      className={`text-[${props.color}] bg-[#9333EA] bg-opacity-10 px-[8px] py-[5px] rounded-full flex text-[8px] items-center font-extrabold`}
    >
      {props.title}
    </div>
  );
};

const People = (props: { people: string[] }) => {
  return (
    <div className="flex -space-x-2">
      {props.people.map((item, index) => (
        <>
          {index < 2 && (
            <div className="w-[28px] h-[28px] rounded-full bg-[#9333EA] bg-opacity-10 ">
              <Image src={item} alt="people" />
            </div>
          )}
        </>
      ))}
      {props.people.length > 2 && (
        <div className="px-2 text-[10px] h-[28px] w-[28px] rounded-full font-extrabold bg-[#F2F4F7] text-[#606C80] flex items-center justify-between">
          +{props.people.length - 2}
        </div>
      )}
    </div>
  );
};

export default Card;
