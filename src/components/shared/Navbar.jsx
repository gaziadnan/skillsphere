"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { authClient } from "../../lib/auth-client";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ session
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // ✅ logout
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f3d2e] to-[#1f5e4a]">
      
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between py-4 text-white">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold animate-pulse">
          SkillSphere
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-green-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/courses" className="hover:text-green-300">
              Courses
            </Link>
          </li>

          <li>
            <Link href="/profile" className="hover:text-green-300">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex gap-3 items-center">
          
          {!user ? (
            <>
              {/* Not Logged In */}
              <Link href="/login">
                <button className="px-4 py-2 rounded-full bg-white text-black">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="px-5 py-2 rounded-full bg-white text-black font-semibold">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* Logged In */}
              <div className="px-4 py-2 rounded-full bg-white text-black">
                {user.name}
              </div>

              <button
                onClick={handleSignOut}
                className="px-5 py-2 rounded-full bg-white text-black font-semibold"
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
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link href="/courses" onClick={() => setOpen(false)}>
                Courses
              </Link>

              <Link href="/profile" onClick={() => setOpen(false)}>
                My Profile
              </Link>
            </ul>

            {/* Mobile Auth */}
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
                  <div className="w-full py-2 text-center bg-white text-black rounded-full">
                    {user.name}
                  </div>

                  <button
                    onClick={handleSignOut}
                    className="w-full py-2 rounded-full bg-white text-black"
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