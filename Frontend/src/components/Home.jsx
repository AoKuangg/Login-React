import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden dark:bg-slate-800">
        <h1 className="text-xl text-green-600 hover:underline text-center">
          Hi, {location.state.user.username}
        </h1>
      </div>
    </>
  );
}
