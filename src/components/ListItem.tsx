import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageUrl: string;
  title: string;
  notifications: number;
};

const ListItem = (props: Props) => {
  return (
    <motion.div
      className="flex p-2 rounded-md hover:bg-slate-200 transition-all duration-300 items-center"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
    >
      <Image src={props.imageUrl} height={24} alt="ico" />
      <div className="cursor-pointer text-[12px] font-semibold flex-grow my-auto px-4">
        {props.title}
      </div>
      {props.notifications > 0 && (
        <div className="flex items-center justify-center text-[10px] font-extrabold text-[#2563EB] bg-[#3B82F6] bg-opacity-10 h-[24px] px-2 rounded-full">
          {props.notifications}
        </div>
      )}
    </motion.div>
  );
};

export default ListItem;
