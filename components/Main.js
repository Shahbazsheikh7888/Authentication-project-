import React from "react";



const Main = () => {
  return (
    <>
    <div name ="home">
      <div className="w-full bg-cover  bg-black  py-20 pb-96 pt-60 mt-15 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <div className="flex flex-col justify-center">
            <p className="text-white text-3xl pt-10 font-bold ">
              Explore the world
            </p>
            <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
             
            </h1>
            <p className="text-orange-400 italic  text-xl ">I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.

            </p>
            {/* <a href="https://marketplace.flexabledats.com/"><button className="text-white bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl italic  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5">Sign Up</button>
            </a> */}
          </div>
          {/* <img
            className="w-[1000px] animate-pulse mx-auto my-4 rounded-full mt-10 pt-5"
            src="/nightlife.jpg"
            alt="/"
          /> */}
        </div>
      </div>
    </div>
    <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  "/>
    </>
  );
};

export default Main;