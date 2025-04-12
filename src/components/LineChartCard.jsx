"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "09", thisMonth: 1.6, lastMonth: 2.8 },
  { date: "10", thisMonth: 2.2, lastMonth: 2.7 },
  { date: "11", thisMonth: 3.4, lastMonth: 3.1 },
  { date: "12", thisMonth: 4.9, lastMonth: 3.4 },
  { date: "13", thisMonth: 3.1, lastMonth: 3.5 },
  { date: "14", thisMonth: 3.5, lastMonth: 2.8 },
  { date: "15", thisMonth: 5.2, lastMonth: 3.2 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};
export function LineChartCard() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} stroke="#E5E7EB" />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />

        <YAxis
          domain={[1.5, 6]}
          ticks={["1.5", "3.0", "4.5", "6.0"]}
          tick={{ fill: "#8C9198", fontSize: 12, fontWeight: 500 }}
          axisLine={false}
          tickLine={false}
          width={30}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />

        {/* Green Area Gradient */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2EB76F" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#2EB76F" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* 🔴 Red Dashed Line as Area */}
        <Area
          type="linear"
          dataKey="lastMonth"
          fill="none"
          stroke="#DB3500CC"
          strokeDasharray="4 4"
          strokeWidth={2}
          dot={false}
        />

        {/* ✅ Green Area */}
        <Area
          type="linear"
          dataKey="thisMonth"
          fill="url(#areaGradient)"
          stroke="#2EB76F"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}
