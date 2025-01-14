"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/store/store";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  console.log(user);

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* Top row */}
      <div className="flex w-full flex-wrap justify-between items-center px-4 py-2">
        <Link
          href="/"
          className="
               text-2xl
               font-bold
               text-blue-400
               hover:opacity-70
               cursor-pointer
               mx-auto 
               sm:mx-0"
        >
          Infinity + Jewelry Co
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="
                    bg-gray-50
                    text-gray-800
                    px-4
                    py-2
                    rounded
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-opacity-50
                    border
                    w-full
                    max-w-4xl
                "
          />
        </Form>

        <div
          className=" 
                flex 
                items-center 
                space-x-4 
                mt-4 sm:mt-0 
                flex-1 
                lg:flex-none
            "
        >
          <Link
            href="/cart"
            className="
                    flex-1
                    relative
                    flex
                    justify-center
                    sm:justify-start 
                    sm:flex-none 
                    items-center
                    space-x-2
                    bg-blue-400
                    hover:bg-blue-600
                    text-white
                    font-bold 
                    py-2 
                    px-4
                    rounded
                "
          >
            <TrolleyIcon className="w-7 h-7" />

            <span className="absolute -top-2 right-2 bg-yellow-200 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>

            <span>My Cart</span>
          </Link>

          {/*User area */}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="
                        flex-1
                        relative
                        flex
                        justify-center
                        sm:justify-start
                        sm:flex-none
                        items-center
                        space-x-2
                        bg-blue-400
                        hover:bg-blue-600
                        text-white
                        font-bold
                        py-2
                        px-4
                        rounded
                        "
              >
                <PackageIcon className="w-7 h-7" />
                <span>My Orders</span>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />

                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <div className="hover:font-bold text-center">
                <SignInButton mode="modal" />
              </div>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
