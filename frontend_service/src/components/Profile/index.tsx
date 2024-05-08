import { TSessionUser } from "@/types/user";
import {VscVerifiedFilled} from 'react-icons/vsc'

export default function UserProfile ({User}: {User: TSessionUser}){
    return (
        <div className="py-6 px-8">
          <div>
            <h1 className="font-bold text-xl">Welcome Your Account </h1>
            {User.user.accountNonExpired ?
            <label className="text-sm text-gray-400">Your account is Active</label>
            :
            <>
            <label className="text-sm text-gray-400">Your account is not Active, contact the admin to verify.</label>
            </>
            }
          </div>

        <div className="border border-gray-200 rounded-md p-4 px-[5%] mt-8 w-[40%] flex justify-between ">
          <div className="mt-8 flex flex-col">
            <div>
            <h2 className="font-bold">Full Name</h2>
            <div className="flex mt-2 gap-2">
                <label className="text-sm text-gray-500">{User.user.name}</label> <VscVerifiedFilled color={User?.user.accountNonExpired ? "blue" : "silver"} />
            </div>
            </div>

            <div className="mt-12">
            <h2 className="font-bold">Username</h2>
            <div className="mt-2">
            <label className="text-sm text-gray-500">{User.user.username}</label>
            </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col ">
            <div>
            <h2 className="font-bold">Phone</h2>
            <div className="flex mt-2 gap-2">
                <label className="text-sm text-gray-500">{User.user.mobile}</label>
            </div>
            </div>

            <div className="mt-12">
            <h2 className="font-bold">Account Role</h2>
            <div className="mt-2">
            <label className="text-sm text-white bg-primary rounded-full p-2 px-4">{User.user.authorities[0].authority.split("_").join(" ")}</label>
            </div>
            </div>
          </div>

          
        </div>
        </div>
    )
}