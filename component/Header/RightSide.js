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
      <div className="hidden md:inline md:w-[28%] lg:w-[20%] ">
        <div className="p-3 bg-white shadow-lg rounded-lg flex flex-col gap-3 h-[100%]">
          <SideBarItem icon={<ShoppingBag />} linkName={"Supermarket"} />
          <SideBarItem icon={<SportsEsportsIcon />} linkName={"Gaming"} />
          <SideBarItem
            icon={<HealthAndSafetyIcon />}
            linkName={"Health and Beauty"}
          />
          <SideBarItem icon={<HomeWorkIcon />} linkName={"Home and Office"} />
          <SideBarItem icon={<MicrowaveIcon />} linkName={"Electronics"} />
          <SideBarItem
            icon={<SmartphoneIcon />}
            linkName={"Phone and Tablet"}
          />
          <SideBarItem icon={<ImportantDevicesIcon />} linkName={"Computing"} />
          <SideBarItem icon={<CableIcon />} linkName={"Electronics"} />
          <SideBarItem icon={<CheckroomIcon />} linkName={"Fashion"} />
          <SideBarItem icon={<CableIcon />} linkName={"Electronics"} />
          <SideBarItem icon={<CableIcon />} linkName={"Electronics"} />
          <SideBarItem
            icon={<ArrowRightIcon />}
            linkName={"other categories"}
          />
        </div>
      </div>
    </>
  );
};

export default RightSide;