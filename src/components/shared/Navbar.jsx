"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { authClient } from "../../lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]">
      
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between py-4 text-white">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold animate-pulse">
          SkillSphere
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-green-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-green-300 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-green-300 transition">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3 relative z-50">
          
          {!user ? (
            <>
              <Link href="/login">
  <button className="bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-400 transition-all duration-300 rounded-full">
    Login
  </button>
</Link>

<Link href="/register">
  <button className="bg-white text-[#244D3F] px-6 py-2 font-semibold rounded-full hover:bg-[#244D3F] hover:text-white transition">
    Register
  </button>
</Link>
            </>
          ) : (
            <>
              {/* ✅ FIXED Avatar */}
           <Link href="/profile">
  <div className=" rounded-full overflow-hidden border-2 border-white flex-shrink-0 cursor-pointer hover:scale-110 transition duration-300">
    <img
      src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
      alt="avatar"
      className="w-8 h-8 object-cover"
      onError={(e) => {
        e.currentTarget.src = "https://i.ibb.co/4pDNDk1/avatar.png";
      }}
    />
  </div>
</Link>      {/* Logout */}
          <button
  onClick={handleSignOut}
  className="bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-400 transition-all duration-300 rounded-full"
>
  Logout
</button>
            </>
          )}
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#244D3F] text-white">
          <div className="max-w-[1400px] mx-auto px-4 py-6">
            
            <ul className="flex flex-col gap-5 text-lg text-center">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
              <Link href="/profile" onClick={() => setOpen(false)}>My Profile</Link>
            </ul>

            <div className="flex flex-col gap-3 mt-6">
              
              {!user ? (
                <>
                  <Link href="/login">
                    <button className="w-full py-2 rounded-full bg-white text-black">
                      Login
                    </button>
                  </Link>

                  <Link href="/register">
                    <button className="w-full py-2 rounded-full bg-white text-black">
                      Register
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  {/* Mobile Avatar */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://i.ibb.co/4pDNDk1/avatar.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}