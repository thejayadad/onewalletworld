'use client'
import { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
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
              Cart
            </Link>
            <span onClick={signOut} className="">
              <FaSignOutAlt className="" /> <span style={{fontSize: '8px'}}>LogOut</span>
            </span>
            {isAdmin && (
              <Link href="/admin" className="link">
                Admin
              </Link>
            )}
          </div>
        </>
      )} 
      <span
        className="lg:hidden cursor-pointer bg-red-300"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </span>
      {open && (
        <div className="bg-blue-200 h-48 flex flex-col items-center justify-center gap-2 w-full">
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
              <div className="flex bg-whitem gap-4">
                <Link href="/cart">
                  Cart
                </Link>
                <span onClick={signOut} className="flex items-center">
                  <FaSignOutAlt /> <span style={{fontSize: '8px'}}>LogOut</span>
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
