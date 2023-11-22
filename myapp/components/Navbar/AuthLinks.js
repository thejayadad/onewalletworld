'use client'
import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status, data: session } = useSession(); // Destructure the session data

  const isAdmin = session?.user?.email === "thejayadad@gmail.com";

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href="/login" className="hidden">
            <FaSignInAlt /> Login
          </Link>
        </> 
      ) : (
        <>
          <div className="hidden lg:inline-flex  gap-4  items-center sm:hidden">
            <Link href="/cart" className="link">
              <FaShoppingCart />
            </Link>
            <span onClick={signOut} className="">
            <span>LogOut</span>
            </span>
            {isAdmin && (
              <Link href="/dashboard" className="link">
                Dashboard
              </Link>
            )}
          </div>
        </>
      )} 
      <span
        className="lg:hidden md:flex-row cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes className="top-0" /> : <FaBars />}
      </span>
      {open && (
        <div className="bg-blue-200 h-48  flex flex-col items-center justify-center gap-2 w-full">
          <Link href="/" className="link">
            Homepage
          </Link>
          <Link href="/" className="link">
            About
          </Link>
          <Link href="/" className="link">
            Contact
          </Link>
   
          {isAdmin && (
            <Link href="/dashboard" className="link">
              Admin
            </Link>
          )}
          {status === "notauthenticated" ? (
            <Link href="/login" className="link">
              <FaSignInAlt /> Login
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <Link  href="/cart">
                  <FaShoppingCart />
                </Link>
                <span onClick={signOut} className="flex items-center">
              <span>LogOut</span>
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
