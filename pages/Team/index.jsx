import Image from "next/image";
import Link from "next/link";
import React from "react";
import voluntasLogo from "../../public/img/voluntasLogo.png";
import aydan from "../../public/img/aydan.jpg";
import elnur_art from "../../public/img/elnur_art.jpg";
import elnur_dev from "../../public/img/elnur_dev.jpg";
import ferid from "../../public/img/ferid.jpg";
import feriqe from "../../public/img/feriqe.jpg";
import fidan from "../../public/img/fidan.jpg";
import nurai from "../../public/img/nurai.jpg";
import qudret from "../../public/img/qudret.jpg";
import samir from "../../public/img/samir.jpg";
import seid from "../../public/img/seid.jpg";
import shams from "../../public/img/shams.jpg";
import vuqar from "../../public/img/vuqar.jpg";
import TeamMember from "@/components/TeamMember/TeamMember";
import banner3 from '../../public/img/banner2.jpg';

const Team = () => {
  const teamData = [
    {
      id: "member1",
      name: "Aydan Alıyeva",
      profession: "Co Founder - Game Designer",
      img: aydan,
    },
    {
      id: "member2",
      name: "Qüdrət Qüdrətli",
      profession: "Co Founder - Business Development Manager",
      img: qudret,
    },
    {
      id: "member3",
      name: "Fidan Abdulla",
      profession: "CTO ",
      img: fidan,
    },
    {
      id: "member4",
      name: "Səid Cəlilzadə",
      profession: "Lead Developer",
      img: seid,
    },
    {
      id: "member5",
      name: "Samir Dadaşov",
      profession: "Lead 3d Artist",
      img: samir,
    },
    {
      id: "member6",
      name: "Elnur İbadov",
      profession: "Lead 2d Artist",
      img: elnur_art,
    },
    {
      id: "member7",
      name: "Elnur Manafov",
      profession: "Developer ",
      img: elnur_dev,
    },
    {
      id: "member8",
      name: "Şəms Mustafayeva",
      profession: "3d Character Artist",
      img: shams,
    },
    {
      id: "member9",
      name: "Fərid Abdullayev",
      profession: "Animator ",
      img: ferid,
    },
    {
      id: "member10",
      name: "Nuray Hüseynova",
      profession: "Marketing",
      img: nurai,
    },
    {
      id: "member11",
      name: "Fəriqə Camallı",
      profession: "SMM ",
      img: feriqe,
    },
    {
      id: "member12",
      name: "Vüqar Hüseynli",
      profession: "Finance Manager",
      img: vuqar,
    },
  ];
  return (
    <div>
      <div className="w-full  xl:h-screen md:h-[80vh] h-[60vh] flex flex-col items-center relative">
      <Image src={banner3} alt='voluntas banner' className='w-full h-full object-cover'  />
        <div className="h-full xl:w-[1200px] w-full absolute top-0 left-1/2 -translate-x-1/2 ">
          <div className="absolute top-[140px]  md:top-[350px] left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 flex flex-col xl:items-start items-center">
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
            <Link href={"#teamSection"}>
              <button className="text-white font-bold bg-[#FBD808] hover:bg-[#e2c20c] transition-all py-4 px-10 text-sm md:text-lg rounded-lg mt-4">
                Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="teamSection" className=" py-[150px] w-full flex justify-center">
        <div className="w-full xl:w-[1200px] px-4 xl:px-0 flex flex-wrap gap-x-8 gap-y-10 justify-center ">
          {teamData?.map((member) => (
            <TeamMember
              key={member?.id}
              name={member?.name}
              profession={member?.profession}
              img={member?.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
