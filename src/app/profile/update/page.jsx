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

  if (isPending) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="min-h-screen bg-[#F8FAFC] mt-20 py-16">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-center">

        <form
          onSubmit={handleUpdate}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
        >

          <h2 className="text-2xl font-bold text-center">
            Update Profile
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            defaultValue={user?.name}
            placeholder="Enter name"
            className="border px-4 py-2 rounded-lg"
            required
          />

          {/* Image */}
          <input
            type="text"
            name="image"
            defaultValue={user?.image}
            placeholder="Enter image URL"
            className="border px-4 py-2 rounded-lg"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-[#244D3F] text-white py-2 rounded-lg hover:bg-[#1b3c32] transition"
          >
            Update Information
          </button>

        </form>
      </div>
    </section>
  );
}