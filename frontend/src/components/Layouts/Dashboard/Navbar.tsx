import React, {useEffect, useState} from  "react";
import { TSessionUser } from "@/types/user";
import Link from "next/link";

export default function Navbar({User}: {User: TSessionUser}){
    const [avatar, setAvatar] = useState('');

    const getAvatar = (name: string) => {
        console.log(name)
        const firstName = name?.split(" ")[0];
        const lastName = name?.split(" ")[1];
        const avatar = name?.split("")[0]
        setAvatar(avatar);
    }

    useEffect(() => {
        getAvatar(User.user.name);
    },[User])
    return (
        <div className="sticky top-0 bg-white z-5 w-full shadow-sm h-[max-content] py-2  px-4 flex justify-between items-center">
            <label className="text-sm"><span className="font-bold">ACCOUNT</span> / <span className="text-gray-600">{User?.user.name}</span></label>
           <Link href={"/dashboard/profile"}>
            <div className="flex justify-around items-center rounded-full bg-primary text-white w-[40px] h-[40px]">{avatar}</div>
           </Link>
        </div>
    )
} 

