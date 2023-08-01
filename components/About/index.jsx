import Image from "next/image";
import Link from "next/link";
import React from "react";
import granny from '../../public/img/granny.jpg';

const Index = () => {
  return (
    <div id="homeAbout" className="w-full flex justify-center">
      <div className="xl:w-[1200px] w-full xl:px-0 px-4 py-[100px]">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[100px] justify-between">
          <div>
            <h1 className="aboutHeader text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px]">Who we are?</h1>
            <h2 className="text-2xl md:text-3xl ">Welcome to Voluntas!</h2>
            <p className="text-[#000] text-sm md:text-base text-opacity-50 my-4">
              At Voluntas, we are passionate about crafting unforgettable gaming
              experiences that captivate players and push the boundaries of
              interactive entertainment. As a leading and innovative game
              development studio, our mission is to create immersive worlds,
              compelling narratives, and groundbreaking gameplay that leave a
              lasting impact on gamers across the globe.
            </p>
            <Link href={"/about"}>
              <button className="text-white bg-[#FBD808] hover:bg-[#e2c20c] font-bold transition-all py-4 px-10 text-base md:text-lg rounded-lg mt-4">
                About Us
              </button>
            </Link>
          </div>

          <div className="flex-shrink-0 w-[300px] rounded-lg overflow-hidden">
            <Image src={granny} alt="voluntas" className="rounded-lg overflow-hidden" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
