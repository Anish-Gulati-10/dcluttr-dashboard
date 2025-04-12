"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const data = [
  { name: "New Delhi", value: 26.5, percent: 35, change: 1.2, color: "#5C4CE0" },
  { name: "Mumbai", value: 36.4, percent: 23, change: -3.3, color: "#F2614B" },
  { name: "West Bengal", value: 12.2, percent: 21, change: -2.3, color: "#F8B84E" },
  { name: "Others", value: 24.3, percent: 9, change: 1.09, color: "#D4D4D8" },
]

const total = data.reduce((sum, item) => sum + item.value, 0).toFixed(1) // ₹68.2L
const totalChange = 2.2

export function DonutChartCard() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Donut Chart */}
      <div className="relative w-48 h-24">
        <PieChart className="w-full h-full">
          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={48}
            outerRadius={64}
            startAngle={180}
            endAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 top-6 flex flex-col items-center justify-center">
          <span className="text-xs text-muted-foreground">Total</span>
          <span className="text-lg font-semibold">₹{total}L</span>
          <span className="text-green-600 text-xs font-medium">
            ↑ {totalChange}%
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="w-full space-y-2">
        {data.map((city, index) => (
          <div
            key={city.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: city.color }}
              />
              <span className="text-[#515153] font-normal">{city.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#171717]">
                ₹{city.value}L
              </span>
              <span className="text-[#8C9198] text-xs font-medium">
                {city.percent}%
              </span>
              <span
                className={`flex items-center text-xs font-medium ${
                  city.change >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {city.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {Math.abs(city.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

