import React from "react";
import SideBarItem from "./SideBarItem";
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
const RightSide = () => {
  return (
    <>
      <div className="hidden md:inline md:w-[40%] lg:w-[20%]">
        <div className="p-1 bg-white shadow-2xl rounded-md items-start h-[100%]">
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
            linkName={"appliances"}
            link="appliances"
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
  );
};

export default RightSide;
