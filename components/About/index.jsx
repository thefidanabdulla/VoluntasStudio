import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div id="homeAbout" className="w-full flex justify-center">
      <div className="xl:w-[1200px] w-full xl:px-0 px-4 pt-[100px]">
        <div>
          <div>
            <h1 className="aboutHeader text-[128px]">Who we are?</h1>
            <h2 className="text-3xl ">Welcome to Voluntas!</h2>
            <p className="text-[#000] text-opacity-50 my-4">
              At Voluntas, we are passionate about crafting unforgettable gaming
              experiences that captivate players and push the boundaries of
              interactive entertainment. As a leading and innovative game
              development studio, our mission is to create immersive worlds,
              compelling narratives, and groundbreaking gameplay that leave a
              lasting impact on gamers across the globe.
            </p>
            <Link href={"/about"}>
              <button className="text-white bg-[#292E32] hover:bg-[#1e2225] transition-all py-4 px-10 text-lg rounded-lg mt-4">
                About Us
              </button>
            </Link>
          </div>

          <div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
