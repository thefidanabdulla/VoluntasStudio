import Image from "next/image";
import Link from "next/link";
import React from "react";
import voluntasLogo from "../../public/img/voluntasLogo.png";
import AboutCard from "@/components/AboutCard/AboutCard";
import banner2 from '../../public/img/banner3.jpg';


const Index = () => {
  const cardsData = [
    {
      id: "card1",
      title: "Our Vision:",
      body: "Our vision is to be at the forefront of the gaming industry, continually striving for excellence in creativity, technology, and player engagement. We aspire to be recognized as a powerhouse of imagination and ingenuity, delivering games that resonate with diverse audiences and transcend cultural boundaries.",
    },
    {
      id: "card2",
      title: "Our Mission:",
      body: "Voluntas is dedicated to crafting games that go beyond mere entertainment, providing players with thought-provoking experiences that challenge conventions and evoke emotions. Through innovative storytelling, cutting-edge technology, and attention to detail, we aim to enrich the gaming landscape and leave players with a sense of wonder and fulfillment.",
    },
    {
      id: "card3",
      title: "Our Values:",
      body: "At the core of Voluntas, we uphold a set of fundamental values that guide our decisions and actions:",
    },
    {
      id: "card4",
      title: "Passion: ",
      body: "We love what we do, and our passion drives us to create exceptional games that inspire joy and excitement in players.",
    },
    {
      id: "card5",
      title: "Innovation: ",
      body: " We embrace innovation and continuously seek novel ways to enhance gameplay, graphics, and overall player experiences.",
    },
    {
      id: "card6",
      title: "Collaboration:",
      body: "Teamwork is the backbone of our studio. We foster a collaborative environment that encourages open communication, diverse perspectives, and the exchange of ideas.",
    },
    {
      id: "card7",
      title: "Player-Centric: ",
      body: "Players are at the heart of everything we do. We strive to understand their desires, preferences, and needs to deliver games that resonate with their expectations.",
    },
    {
      id: "card8",
      title: "Integrity: ",
      body: "We uphold integrity in our relationships with players, partners, and each other, fostering trust and accountability.",
    },
    {
      id: "card9",
      title: "The Team:",
      body: "Voluntas is home to a diverse and talented team of developers, artists, designers, writers, and gaming enthusiasts.",
    },
    {
      id: "card10",
      title: "Future Endeavors:",
      body: "As we look to the future, Voluntas aims to push the boundaries of gaming even further. We strive to embrace emerging technologies, explore new genres, and forge partnerships that fuel our passion for innovation.",
    },
  ];

  return (
    <div>
      <div className="w-full  xl:h-screen md:h-[80vh] h-[60vh] flex justify-center relative">
      <Image src={banner2} alt='voluntas banner' className='w-full h-full object-cover'  />
        <div className="h-full xl:w-[1200px] w-full absolute top-0 left-1/2 -translate-x-1/2 ">
          <div className="absolute top-[140px]  md:top-[200px] left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 flex flex-col xl:items-start items-center">
            <div>
              <Image
                src={voluntasLogo}
                alt="Voluntas Logo"
                className="w-[250px] xl:w-[400px]"
              />
            </div>
            <p className="text-white text-opacity-90 text-xl pl-2 mt-2 text-center">
              Where imagination knows no bounds!
            </p>
            <Link href={"#aboutSection"}>
              <button className="text-white font-bold bg-[#FBD808] hover:bg-[#e2c20c] transition-all py-4 px-10 text-sm md:text-lg rounded-lg mt-4">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="aboutSection" className="w-full flex justify-center py-[100px]">
        <div className="xl:w-[1200px] w-full xl:px-0 px-4">
          <h1 className="aboutHeader text-[96px] md:text-[128px]">About Us</h1>
          <h2 className="text-3xl ">Welcome to Voluntas!</h2>
          <p className="text-[#000] text-opacity-50 my-4">
            At Voluntas, we are passionate about crafting unforgettable gaming
            experiences that captivate players and push the boundaries of
            interactive entertainment. As a leading and innovative game
            development studio, our mission is to create immersive worlds,
            compelling narratives, and groundbreaking gameplay that leave a
            lasting impact on gamers across the globe.
          </p>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            {cardsData?.map((item) => (
              <AboutCard
                key={item?.id}
                cardHeader={item?.title}
                cardContent={item?.body}
              />
            ))}
          </div>
          <p className="text-[#000] text-opacity-50 my-4">
            Join us on this thrilling journey, as we continue to create
            experiences that leave a mark on the gaming world and the hearts of
            players everywhere. Together, we will shape the future of
            interactive entertainment. Welcome to Voluntas, where imagination
            knows no bounds!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
