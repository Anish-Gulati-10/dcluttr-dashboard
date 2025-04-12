"use client";
import Charts from "@/components/Charts";
import CityTable from "@/components/cityTable";
import DateRangePicker from "@/components/DateRangePicker";
import FilterDropdown from "@/components/FilterDropdown";
import SkuTable from "@/components/SkuTable";
import StoreSelector from "@/components/StoreSelector";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChartLine } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(true)
  return (
    <main className="p-5 bg-white min-h-screen flex-1">
      <section className="border border-[#EBEBEB] rounded-[10px] bg-[#FAFAFA] flex flex-col overflow-hidden">
        <div className="bg-white">
          <div className="px-6 py-3 flex justify-between items-center">
            <h1 className="text-sm font-medium">Quick Commerce</h1>
            <div className="flex gap-2">
              <div className="py-2 px-4 flex gap-2 rounded-[10px] border border-[#D9D9D9] items-center">
                <Label htmlFor="chart">
                  <ChartLine strokeWidth={1.5} color="#031B15" />
                </Label>
                <Switch id="chart" checked={enabled} onCheckedChange={setEnabled}/>
              </div>
              <div className="rounded-[10px] border border-[#D9D9D9]">
                <DateRangePicker />
              </div>
            </div>
          </div>
          <div className="px-6 py-3  border-t border-b border-[#EBEBEB]"><StoreSelector /></div>
        </div>
        <div id="data" className="p-6 flex flex-col gap-12">
          <Charts />
        </div>
        <div className="flex flex-col gap-6 p-6">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-xl font-bold text-[#031B15]">SKU level data</h2>
              <p className="text-sm text-[#4F4D55] mt-1">Analytics for all your SKUs</p>
            </div>
            <FilterDropdown />
          </div>
          <SkuTable />
        </div>
        <div className="flex flex-col gap-6 p-6">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-xl font-bold text-[#031B15]">City level data</h2>
              <p className="text-sm text-[#4F4D55] mt-1">Analytics for all your Cities</p>
            </div>
            <FilterDropdown />
          </div>
          <CityTable />
        </div>
      </section>
    </main>
  );
}
