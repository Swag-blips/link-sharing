import React from "react";
import profileImage from "../../assets/images/user.jpg";
import { Github, Youtube, LinkedIn } from "../../assets/icons";
import arrowRight from "../../assets/images/icon-arrow-right.svg";
import { useParams } from "react-router-dom";

const ProfileLinks = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-col items-center gap-[24px]">
        <img
          src={profileImage}
          alt="profile image"
          className="w-[104px] h-[104px] rounded-full object-cover border-[4px] border-[#633CFF]"
        />
        <div className="flex flex-col gap-[8px] items-center text-center ">
          <h1 className="text-[#333333] text-[32px] font-bold">Ben {id}</h1>
          <p className="text-[#737373] text-[16px] ">ben @example.com</p>
        </div>
      </div>
      <div className="flex items-center mt-[56px] flex-col gap-[20px] mx-[69px]">
        <div className="flex items-center justify-between w-full">
          <div className="bg-[#1A1A1A] flex items-center justify-between  px-[16px] space-x-2 w-[237px] h-[56px] rounded-[8px] ">
            <div className="flex items-center space-x-2 ">
              <Github color="#ffffff" width="24" height="24" />
              <p className="text-[16px] text-white">GitHub</p>
            </div>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </div>
        <div className="bg-[#EE3939] flex items-center justify-between  px-[16px] space-x-2 w-[237px] h-[56px] rounded-[8px] ">
          <div className="flex items-center space-x-2 ">
            <Youtube color="#ffffff" width="24" height="24" />
            <p className="text-[16px] text-white">YouTube</p>
          </div>
          <img src={arrowRight} alt="arrow right" />
        </div>
        <div className="bg-[#2D68FF] flex items-center justify-between  px-[16px] space-x-2 w-[237px] h-[56px] rounded-[8px] ">
          <div className="flex items-center space-x-2 ">
            <LinkedIn color="#ffffff" width="24" height="24" />
            <p className="text-[16px] text-white">LinkedIn</p>
          </div>
          <img src={arrowRight} alt="arrow right" />
        </div>
      </div>
    </>
  );
};

export default ProfileLinks;