"use client"
import Card from "./card"


const Resizable = () => {

  return (
<div class="wrap items-center justify-center">
        
  {/* component 1*/}

  <div className="resize both h-screen flex items-center justify-center  pb--8">
  <card className="bg-white p-3 w-[32rem] ">
    {/* Header */}
    <header className="flex font-light text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-90 -ml-2"
        viewBox="0 0 24 24"
        stroke="#b91c1c"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
      <p>TECH BLOG</p>
    </header>
    {/* Title */}
    <h2 className="font-bold text-3xl mt-2">
      Rapid Event Notification System at Netflix
    </h2>
    {/* Tags */}
    <p className="mt-5">
      By:
      <a href="#" className="text-red-600">
        {" "}
        Ankush Gulati{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        David Gevorkyan{" "}
      </a>
    </p>
    <p>
      Additional credits:
      <a href="#" className="text-red-600">
        {" "}
        Michael Clark{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        Gokhan Ozer{" "}
      </a>
    </p>
    {/* Description */}
    <h3 className="font-bold text-xl mt-8"> Intro </h3>
    <p className="font-light">
      {" "}
      Netflix has more than 220 million active members who perform a variety
      of actions throughout each session, ranging from renaming a profile to
      watchi...{" "}
    </p>
    
  </card>
  </div>
  <div className="resize both h-screen flex items-center justify-center">
  <card className="bg-white p-3 w-[32rem]">
    {/* Header */}
    <header className="flex font-light text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-90 -ml-2"
        viewBox="0 0 24 24"
        stroke="#b91c1c"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
      <p>TECH BLOG</p>
    </header>
    {/* Title */}
    <h2 className="font-bold text-3xl mt-2">
      Rapid Event Notification System at Netflix
    </h2>
    {/* Tags */}
    <p className="mt-5">
      By:
      <a href="#" className="text-red-600">
        {" "}
        Ankush Gulati{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        David Gevorkyan{" "}
      </a>
    </p>
    <p>
      Additional credits:
      <a href="#" className="text-red-600">
        {" "}
        Michael Clark{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        Gokhan Ozer{" "}
      </a>
    </p>
    {/* Description */}
    <h3 className="font-bold text-xl mt-8"> Intro </h3>
    <p className="font-light">
      {" "}
      Netflix has more than 220 million active members who perform a variety
      of actions throughout each session, ranging from renaming a profile to
      watchi...{" "}
    </p>
    
  </card>
  </div>
  <div className="resize both h-screen flex items-center justify-center">
  <card className="bg-white p-3 w-[32rem]">
    {/* Header */}
    <header className="flex font-light text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rotate-90 -ml-2"
        viewBox="0 0 24 24"
        stroke="#b91c1c"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
      <p>TECH BLOG</p>
    </header>
    {/* Title */}
    <h2 className="font-bold text-3xl mt-2">
      Rapid Event Notification System at Netflix
    </h2>
    {/* Tags */}
    <p className="mt-5">
      By:
      <a href="#" className="text-red-600">
        {" "}
        Ankush Gulati{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        David Gevorkyan{" "}
      </a>
    </p>
    <p>
      Additional credits:
      <a href="#" className="text-red-600">
        {" "}
        Michael Clark{" "}
      </a>
      ,
      <a href="#" className="text-red-600">
        {" "}
        Gokhan Ozer{" "}
      </a>
    </p>
    {/* Description */}
    <h3 className="font-bold text-xl mt-8"> Intro </h3>
    <p className="font-light">
      {" "}
      Netflix has more than 220 million active members who perform a variety
      of actions throughout each session, ranging from renaming a profile to
      watchi...{" "}
    </p>
    
  </card>
  </div>
 </div>

  );
};


export default Resizable;
