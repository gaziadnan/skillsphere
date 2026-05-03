"use client";

import {authClient} from "../../lib/auth-client";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  const {data: session, isPending} = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  if (isPending) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="bg-[#F8FAFC] h-screen pt-24 pb-10 flex justify-center">
      <div className="w-full max-w-xl px-4">
        {/* 🔥 MEDIUM OVAL CARD */}
        <div className="bg-white border border-gray-200 rounded-full px-6 py-4 shadow-sm flex items-center gap-10 mt-10">
          {/* 🔥 IMAGE (FIXED SIZE) */}
          {/* 🔥 ROUND IMAGE */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
            <img
              src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* 🔥 INFO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-base font-semibold text-gray-800">
              {user?.name}
            </h2>

            <p className="text-sm text-gray-500">{user?.email}</p>

            <Link href="/profile/update">
              <button className="mt-2 px-4 py-1 border border-[#244D3F] text-[#244D3F] rounded-full hover:bg-[#244D3F] hover:text-white transition text-sm">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
