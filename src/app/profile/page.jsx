"use client";

import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#244D3F] rounded-full animate-spin"></div>
      </div>
    );

  return (
    <section className="bg-[#F8FAFC] min-h-screen pt-28 pb-10 flex justify-center items-start">
      
      <div className="w-full max-w-md px-4">
        
        {/* 🔥 PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* 🔥 TOP STRIP */}
          <div className="h-[20px] w-full bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]"></div>

          {/* 🔥 CONTENT */}
          <div className="p-8 flex flex-col items-center text-center">
            
            {/* IMAGE */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* NAME */}
            <h2 className="mt-5 text-2xl font-bold text-gray-800 uppercase tracking-wide">
              {user?.name}
            </h2>

            {/* EMAIL */}
            <p className="text-gray-500 mt-1 text-sm">
              {user?.email}
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-200 my-6"></div>

            {/* BUTTON */}
            <Link href="/profile/update" className="w-full">
              <button className="w-full bg-[#244D3F] text-white py-2 rounded-lg font-medium hover:bg-[#1f5e4a] transition-all duration-300">
                Update Profile
              </button>
            </Link>
          </div>

          {/* 🔥 BOTTOM STRIP */}
          <div className="h-[20px] w-full bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]"></div>

        </div>

      </div>
    </section>
  );
}