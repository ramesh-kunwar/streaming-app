import React from "react";

const MainBoard = () => {
  return (
    <div className="relative h-[52vw]">
      <video
        autoPlay
        muted
        loop
        className="w-full h-[52vw] brightness-50 object-cover"
        src={"/videos/demo.mp4"}
      />

      <div className="absolute top-[40%] ml-16">
        <p className="text-white text-6xl h-full w-[70%] ">
          Avengers Infinity War
        </p>
        <p className="text-white text-lg w-[50%] mt-10">
          The avengers and their allies must be willing to sacrifice all in an
          attempt to defeat the powerful Thanos before his blitz of devastation
          and ruin puts an end to the universe.
        </p>

        <div className="mt-3 flex flex-row">
          <button className="bg-white text-white bg-opacity-30 rounded py-2 px-4 text-lg font-semibold flex flex-row items-center mt-10 hover:bg-opacity-40 transition-all">
            More Info
          </button>

          <button className="bg-white text-black rounded py-2 px-4 text-lg font-semibold flex flex-row items-center mt-10 ml-4 hover:bg-opacity-90 transition-all">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
