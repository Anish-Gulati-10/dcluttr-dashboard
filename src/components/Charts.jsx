import { CircleHelp } from "lucide-react";
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Image from "next/image";
import { arrowUp } from "../../public/assets/icons";
import {LineChartCard} from "./LineChartCard";
import {DonutChartCard} from "./DonutChartCard";
import { DonutChart } from "./piechart";


const Charts = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="shadow-[0px_1px_0px_rgba(0,0,0,0.12)] bg-white overflow-hidden border border-[#F1F1F1] rounded-xl">
        <div className="border-b border-[#F1F1F1] p-3 flex justify-between items-center">
          <h2 className="text-[#515153] font-semibold">Sales (MRP)</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <CircleHelp size={20} color="#031B15" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm text-[#515153] font-normal">
                This is the total sales amount before any discounts or offers.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-[#031B15] font-bold text-2xl">125.49</h3>
            <div className="flex flex-col gap-1 items-end">
              <p className="font-bold text-sm text-[#1D874F] flex gap-1 items-center">
                <Image src={arrowUp} alt="arrow up"/>
                2.4%
              </p>
              <p className="text-sm text-[#031B1599]">vs 119.69 last month</p>
            </div>
          </div>
          <LineChartCard />
        </div>
        <div className="p-3 flex gap-4 text-xs text-[#7D7D7E] border-t border-[#F1F1F1]">
            <p className="flex gap-1.5 items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#1D874F]" />This Month</p>
            <p className="flex gap-1.5 items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#E25D33]" />Last Month</p>
        </div>
      </div>

      <div className="shadow-[0px_1px_0px_rgba(0,0,0,0.12)] bg-white overflow-hidden border border-[#F1F1F1] rounded-xl">
        <div className="border-b border-[#F1F1F1] p-3 flex justify-between items-center">
          <h2 className="text-[#515153] font-semibold">Total Quantity Sold</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <CircleHelp size={20} color="#031B15" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm text-[#515153] font-normal">
                This is the total quantity of items sold during the selected period.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-[#031B15] font-bold text-2xl">125.49</h3>
            <div className="flex flex-col gap-1 items-end">
              <p className="font-bold text-sm text-[#1D874F] flex gap-1 items-center">
                <Image src={arrowUp} alt="arrow up"/>
                2.4%
              </p>
              <p className="text-sm text-[#031B1599]">vs 119.69 last month</p>
            </div>
          </div>
          <LineChartCard />
        </div>
        <div className="p-3 flex gap-4 text-xs text-[#7D7D7E] border-t border-[#F1F1F1]">
            <p className="flex gap-1.5 items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#1D874F]" />This Month</p>
            <p className="flex gap-1.5 items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#E25D33]" />Last Month</p>
        </div>
      </div>

      <div className="shadow-[0px_1px_0px_rgba(0,0,0,0.12)] bg-white overflow-hidden border border-[#F1F1F1] rounded-xl">
        <div className="border-b border-[#F1F1F1] p-3 flex justify-between items-center">
          <h2 className="text-[#515153] font-semibold">Top Cities</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <CircleHelp size={20} color="#031B15" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm text-[#515153] font-normal">
                This is the total sales amount as per the city.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="p-3 flex flex-col gap-3">
          {/* <DonutChartCard /> */}
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
