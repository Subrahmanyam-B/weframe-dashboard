import AvatarContainer from "./AvatarContainer"
import Avatar3 from "@/assets/Avatar3.svg";
import Avatar4 from "@/assets/Avatar4.svg";
import Avatar5 from "@/assets/Avatar5.svg";
import Avatar6 from "@/assets/Avatar6.svg";
import Avatar7 from "@/assets/Avatar7.svg";
import Avatar8 from "@/assets/Avatar8.svg";
import Avatar9 from "@/assets/Avatar9.svg";
import Avatar10 from "@/assets/Avatar10.svg";
import CloseButton from "@/assets/close.svg";
import Image from "next/image";
import {motion} from "framer-motion"


type Props = {}

const SideBarRight = (props: Props) => {
  return (
    <motion.div className="hidden lg:block w-[88px] border-[1px]" 
    initial="hidden"
    animate="show"
    variants={{
      hidden: {
        x: 88,
      },
      show: {
        x: 0,
        transition: {
          staggerChildren: 0.07,
          delayChildren: 1,
        },
      },
    }}
    >
      <div className="h-[88px] flex items-center justify-center"><Image src={CloseButton} alt="close"/></div>
      <ul className="flex flex-col justify-center items-center h-screen gap-3">
        <AvatarContainer src={Avatar3} status="online" notifications={0}/>
        <AvatarContainer src={Avatar4} status="offline" notifications={0}/>
        <AvatarContainer src={Avatar5} status="offline" notifications={5}/>
        <AvatarContainer src={Avatar6} status="online" notifications={0}/>
        <AvatarContainer src={Avatar7} status="offline" notifications={0}/>
        <AvatarContainer src={Avatar8} status="online" notifications={12}/>
        <AvatarContainer src={Avatar9} status="online" notifications={0}/>
        <AvatarContainer src={Avatar10} status="online" notifications={0}/>
        <AvatarContainer src={Avatar4} status="offline" notifications={2}/>
        <AvatarContainer src={Avatar5} status="offline" notifications={0}/>
        <AvatarContainer src={Avatar6} status="online" notifications={0}/>
        <AvatarContainer src={Avatar7} status="offline" notifications={0}/>
      </ul>
    </motion.div>
  )
}

export default SideBarRight