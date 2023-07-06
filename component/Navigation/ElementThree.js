import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingBag } from "@mui/icons-material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import CableIcon from "@mui/icons-material/Cable";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SideBarItem from "../Header/SideBarItem";
const ElementThree = () => {
  return (
    <>
      <div className="dropdown dropdown-right cursor-pointer">
        <label tabIndex={0} className="mt-1">
          <MenuIcon className="my-auto mt-2" />
        </label>
        <>
          <div className="dropdown-content menu  rounded-box w-60 z-50 ">
            <div className="p-3 bg-white shadow-lg rounded-lg flex flex-col gap-3 relative ">
              <SideBarItem
                icon={<ShoppingBag />}
                linkName={"Supermarket"}
                link="supermarket"
              />
              <SideBarItem
                icon={<SportsEsportsIcon />}
                linkName={"Gaming"}
                link="gaming"
              />
              <SideBarItem
                icon={<HealthAndSafetyIcon />}
                linkName={"Health and Beauty"}
                link="Health&Beauty"
              />
              <SideBarItem
                icon={<HomeWorkIcon />}
                linkName={"Home and Office"}
                link="home&office"
              />
              <SideBarItem
                icon={<MicrowaveIcon />}
                linkName={"Electronics"}
                link="Electronics"
              />
              <SideBarItem
                icon={<SmartphoneIcon />}
                linkName={"Phone and Tablet"}
                link="phones&tablet"
              />
              <SideBarItem
                icon={<ImportantDevicesIcon />}
                linkName={"Computing"}
                link="computing"
              />
              <SideBarItem
                icon={<CheckroomIcon />}
                linkName={"Fashion"}
                link="fashion"
              />
              <SideBarItem
                icon={<ArrowRightIcon />}
                linkName={"other categories"}
                link="other&categories"
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default ElementThree;
