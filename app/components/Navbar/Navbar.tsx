
import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div className="text-3xl font-bold">
          <Link href="/">
            <li>The Tasks</li>
          </Link>
        </div>
        <div className="flex gap-10 text-3xl font-bold">
          {!isAuth ? (
            <>
              <Link href="/signin">
                <li>Login</li>
              </Link>
              <Link href="/signup">
                <li>Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/about">
                <li>About</li>
              </Link>
              <li>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};
export default Navbar;