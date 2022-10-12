import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
import { IoCellularSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({progress}) => {
  return (
    <header className="header-cont">
      <div className="top-wrapper">
        <div className="left-cont">
          <div>
            <h2>11:32</h2>
            <div className="icon-cont">
              <RiSendPlaneLine />
            </div>
          </div>

          <div className="left-arrow-cont" >
              <IoIosArrowBack />
          </div>
        </div>
        <div className="middle-cont">
          <h3>Add Product</h3>
        </div>
        <div className="right-cont">
          <div className="icon-cont">
            <IoCellularSharp />
          </div>
          <div className="icon-cont">
            <AiOutlineWifi />
          </div>
          <div className="icon-cont">
            <BsBatteryFull />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
