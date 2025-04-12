"use client";

import { ChevronDown, CircleHelp } from "lucide-react";
import Image from "next/image";
import { boat, mamaEarth, perfora } from "../../public/assets/logos";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useState } from "react";
import {
  caretUpDown,
  channels,
  collapse,
  creatives,
  home,
  plus,
  settings,
  users,
} from "../../public/assets/icons";

export default function Sidebar() {
  const [selectedBrand, setSelectedBrand] = useState("Perfora");
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("Quick Commerce");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItemClass =
    "flex items-center gap-3 py-2 px-3 cursor-pointer text-sm font-medium hover:text-[#027056] rounded-[10px]";
  const activeItemClass = "bg-[#E7F1EE] text-[#015C4E]";

  const brands = [
    { name: "Perfora", logo: perfora },
    { name: "Mama Earth", logo: mamaEarth },
    { name: "Boat", logo: boat },
  ];

  return (
    <div
      className={`flex h-screen sticky top-0 pt-6 ${
        isCollapsed ? "w-auto" : "w-72"
      }`}>
      {/* Brands and Avatar Section */}
      <div className="flex flex-col justify-between pb-8">
        <div className="flex flex-col gap-4 px-1.5">
          {brands.map((brand, idx) => {
            const isSelected = selectedBrand === brand.name;
            return (
              <HoverCard key={idx}>
                <HoverCardTrigger asChild>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    className={`rounded-[12px] cursor-pointer ${
                      isSelected && !isCollapsed && "border-2 border-[#139C53]"
                    }`}
                    onClick={() => {
                      if (selectedBrand === brand.name) {
                        setIsCollapsed(true);
                        setSelectedBrand("");
                      } else {
                        setSelectedBrand(brand.name);
                        setIsCollapsed(false);
                      }
                    }}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit" side="right">
                  <p className="text-sm text-[#515153] font-normal">
                    {brand.name}
                  </p>
                </HoverCardContent>
              </HoverCard>
            );
          })}
          <div className="border-[0.5px] border-[#B4BBB9] rounded-[12px] flex-center p-2.5">
            <Image src={plus} alt="add more brands" />
          </div>
        </div>

        <div className="px-3 flex flex-col gap-4 items-center">
          <Image src={users} alt="Users" />
          <div className="bg-[#9106FF] border border-[#FFFFFF1A] rounded-full w-7 h-7 flex-center font-semibold text-xs text-white hover:cursor-pointer">
            SS
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      {!isCollapsed && (
        <div className="flex flex-col flex-1">
          {/* Collapsible section for the brand name and caret icon */}
          <div className="bg-white pb-5 flex gap-4 px-2.5">
            <div className="border border-[#0000001F] flex gap-[46px] items-center rounded-[12px] bg-[#FDFDFD] p-1.5">
              <div className="flex gap-2 items-center">
                <div className="flex-center bg-[#309E96] text-xs p-[5px] font-semibold text-white rounded-[7px]">
                  SS
                </div>
                <p className="font-semibold text-sm">Test_brand</p>
              </div>
              <Image src={caretUpDown} alt="caretUpDown" />
            </div>
            <Image
              src={collapse}
              alt="collapse"
              onClick={() => {setIsCollapsed(!isCollapsed); setSelectedBrand("")}}
              className="cursor-pointer"
            />
          </div>

          <div className="bg-[#F8F8F8] flex-1 pt-6 pb-[26px] px-4 flex flex-col justify-between text-[#031B15]">
            <div className="flex flex-col gap-2.5">
              <div
                className={`${navItemClass} ${
                  active === "Overview" ? activeItemClass : ""
                }`}
                onClick={() => setActive("Overview")}>
                <Image src={home} alt="home" />
                Overview
              </div>

              <div>
                <div
                  className={`${navItemClass}`}
                  onClick={() => setExpanded(!expanded)}>
                  <Image src={channels} alt="channels" />
                  Channels
                  <ChevronDown
                    className={`ml-auto w-4 h-4 transition-transform`}
                  />
                </div>
                {expanded && (
                  <div className="pl-4 flex flex-col gap-1 text-[#031B15CC] text-sm font-normal">
                    <div
                      className={`cursor-pointer px-4 py-1.5 hover:text-[#027056] rounded-[10px] ${
                        active === "Meta Ads"
                          ? "text-[#027056] bg-[#DFEAE8] font-semibold"
                          : ""
                      }`}
                      onClick={() => setActive("Meta Ads")}>
                      Meta Ads
                    </div>
                    <div
                      className={`cursor-pointer px-4 py-1.5 hover:text-[#027056] rounded-[10px] ${
                        active === "Google Ads"
                          ? "text-[#027056] bg-[#DFEAE8] font-semibold"
                          : ""
                      }`}
                      onClick={() => setActive("Google Ads")}>
                      Google Ads
                    </div>
                    <div
                      className={`cursor-pointer px-4 py-1.5 hover:text-[#027056] rounded-[10px] ${
                        active === "Quick Commerce"
                          ? "text-[#027056] bg-[#DFEAE8] font-semibold"
                          : ""
                      }`}
                      onClick={() => setActive("Quick Commerce")}>
                      Quick Commerce
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`${navItemClass} ${
                  active === "Creatives" ? activeItemClass : ""
                }`}
                onClick={() => setActive("Creatives")}>
                <Image src={creatives} alt="creatives" />
                Creatives
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className={`${navItemClass} `}>
                <CircleHelp size={20} color="#7E8986" />
                Help
              </div>
              <div className={`${navItemClass} `}>
                <Image src={settings} alt="settings" />
                Settings
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
