"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/utils/uploadthing";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b border-white p-4">
      <p className="text-2xl font-semibold">Gallery App</p>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            onClientUploadComplete={() => {
              router.refresh();
            }}
            endpoint="imageUploader"
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
