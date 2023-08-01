import React from "react";

const AboutCard = ({cardHeader, cardContent}) => {
  return (
    <div className="w-full  shadow-md flex-shrink-0 rounded-lg overflow-hidden border border-[#45697A50] group">
      <h2 className="text-3xl  font-bold p-4 text-[#597e8f] border-b border-[#597e8f50] transition-all">
        {cardHeader}
      </h2>
      <p className="text-[#000] text-opacity-50 my-4 text-center p-2">
        {cardContent}
      </p>
    </div>
  );
};

export default AboutCard;
