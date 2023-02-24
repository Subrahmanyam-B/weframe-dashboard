import Image from "next/image";
import {motion} from "framer-motion"


type Props = {
  src: string;
  notifications: number;
  status: string;
};

const AvatarContainer = (props: Props) => {
  return (
    <motion.div className="relative"
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    }}
    >
      <Image src={props.src} alt="avatar" />
      {props.status === "online" ? (<div className="absolute w-3 h-3 bg-green-600 rounded-full border-white border-2 z-10 bottom-0 right-0"></div>) : (<div className="absolute w-3 h-3 bg-red-600 rounded-full border-white border-2 z-10 bottom-0 right-0"></div>)}
      {props.notifications!== 0 ?(<div className="absolute p-[6px] min-w-6 h-6 bg-[#EF4444] rounded-full border-white border-2 z-10 -top-1 -right-1 flex items-center justify-center"><p className="text-white font-extrabold text-[10px]">{props.notifications}</p></div>) :(<></>)}
    </motion.div>
  );
};

export default AvatarContainer;
