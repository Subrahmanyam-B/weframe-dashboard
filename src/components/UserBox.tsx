import Image from "next/image";
import Avatar from "@/assets/Avatar.svg";
import UnfoldMore from "@/assets/unfold_more.svg";

type Props = {};

const UserBox = (props: Props) => {
  return (
    <div className="mx-8 py-8 flex items-center border-b-[1px]">
      <div>
        <Image src={Avatar} width={46} height={46} alt="Avatar" />
      </div>
      <div className="flex-grow">
        <div className="mx-3 flex flex-col gap-1">
          <p className="text-[12px] font-bold">Nancy Martino</p>
          <p className="text-[11px] font-bold text-slate-400">Designer</p>
        </div>
      </div>
      <div className="">
        <Image src={UnfoldMore} alt="svg" />
      </div>
    </div>
  );
};

export default UserBox;
