"use client";

import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // 🔐 Protect route
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error("Update failed");
      return;
    }

    toast.success("Profile updated");
    router.push("/profile");
  };

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#244D3F] rounded-full animate-spin"></div>
      </div>
    );

  return (
    <section className="bg-[#F8FAFC] min-h-screen pt-28 pb-10 flex justify-center items-start">
      
      <div className="w-full max-w-md px-4">

        {/* 🔥 CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

          {/* 🔥 TOP STRIP */}
          <div className="h-[10px] w-full bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]"></div>

          {/* 🔥 FORM CONTENT */}
          <form onSubmit={handleUpdate} className="p-8 flex flex-col gap-5">
            
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Update Profile
            </h2>

            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.name}
                placeholder="Enter name"
                className="border px-4 py-2 rounded-lg outline-none focus:border-[#244D3F]"
                required
              />
            </div>

            {/* IMAGE */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={user?.image}
                placeholder="Enter image URL"
                className="border px-4 py-2 rounded-lg outline-none focus:border-[#244D3F]"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-[#244D3F] text-white py-2 rounded-lg font-medium hover:bg-[#1f5e4a] transition-all duration-300"
            >
              Update Information
            </button>

          </form>

          {/* 🔥 BOTTOM STRIP */}
          <div className="h-[10px] w-full bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]"></div>

        </div>

      </div>
    </section>
  );
}