"use client";

import * as React from "react";
import { ArrowUp, TrendingUp } from "lucide-react";
import { Cell, Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";
import { arrowDown, arrowUp } from "../../public/assets/icons";
/* const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]; */
const chartData = [
  {
    name: "New Delhi",
    value: 26.5,
    percent: 35,
    change: 1.2,
    color: "#5C4CE0",
  },
  { name: "Mumbai", value: 36.4, percent: 23, change: -3.3, color: "#F2614B" },
  {
    name: "West Bengal",
    value: 12.2,
    percent: 21,
    change: -2.3,
    color: "#F8B84E",
  },
  { name: "Others", value: 24.3, percent: 9, change: 1.09, color: "#D4D4D8" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function DonutChart() {

  return (
    <div className="relative overflow-hidden flex flex-col flex-1">
      {/* <div className="relative w-full h-[144px] overflow-hidden">
      <ChartContainer
        config={chartConfig}
        className="relative flex-center">
        <PieChart height={104} className="absolute top-0 left-0">
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            startAngle={180}
            endAngle={0}
            innerRadius={76}
            outerRadius={96}
            strokeWidth={0}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    console.log(viewBox.cx, viewBox.cy);
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs text-[#7D7D7E]">
                      <tspan x={viewBox.cx} y={viewBox.cy-50} className="text-xs text-[#7D7D7E]">Total</tspan>
                      <tspan x={viewBox.cx} y={viewBox.cy-30} className="text-lg text-black font-bold">₹68.2L</tspan>
                      <tspan x={viewBox.cx} y={viewBox.cy-5} className="text-[#1D874F] font-medium"> <ArrowUp />↑ 2.2%</tspan>
                    </text>                
                  );
                }
              }}
            />
          </Pie>
          
        </PieChart>
      </ChartContainer>
      </div> */}
      <Image src="/pieChart.png" width={193} height={104} className="mx-auto" alt="City Chart"/>

      {/* Breakdown */}
      <div className="w-full flex flex-1 flex-col justify-around pt-5">
        {chartData.map((city) => (
          <div
            key={city.name}
            className="flex items-center justify-between text-base py-1"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: city.color }}
              />
              <span className="text-[#7D7D7E] font-normal">{city.name}</span>
            </div>

            <div className="flex items-center gap-1.5 ">
              <span className="font-bold text-black">
                ₹{city.value}L
              </span>
              <span className="text-[#7D7D7E] bg-[#F7F7F7] py-0.5 px-1">
                {city.percent}%
              </span>
              <span
                className={`flex items-center font-medium ${
                  city.change >= 0 ? "text-[#1D874F]" : "text-[#F31D1D]"
                }`}
              >
                {city.change >= 0 ? <Image src={arrowUp} alt="Arrow Up" /> : <Image src={arrowDown} alt="Arrow Down" />}
                {Math.abs(city.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
