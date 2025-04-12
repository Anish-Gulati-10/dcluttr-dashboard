"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartLine } from "lucide-react";
import { arrowDown, arrowUp, caretDown } from "../../public/assets/icons";
import Image from "next/image";

const tableData = [
  {
    sku: "Protein Bar 100g",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    inventory: "931.9",
    avgRank: "3.2",
    traffic: "12,303",
    impressions: "25,005",
    cli: "1.90%",
  },
  {
    sku: "Choco Bar 100g",
    sales: ["₹8,526.32", "₹7,012.72", "↑ 2.4%"],
    outOfStock: ["6.79%", "3.28%", "↑ 2.4%"],
    inventory: ["679", "328", "0"],
    avgRank: ["7", "4", "↑ 2.4%"],
    traffic: ["3005", "2960", "↑ 2.4%"],
    impressions: ["4231", "3657", "↑ 2.4%"],
    cli: ["10", "45", "↓ 4.2%"],
  },
  {
    sku: "SKU 3",
    sales: "₹9313",
    outOfStock: "1.68%",
    inventory: "931.9",
    avgRank: "11",
    traffic: "1931.9",
    impressions: "₹931.9",
    cli: "1.90%",
  },
  {
    sku: "SKU 4",
    sales: "₹0",
    outOfStock: "0",
    inventory: "0",
    avgRank: "0",
    traffic: "₹0",
    impressions: "₹0",
    cli: "0.00%",
  },
];

export default function FixedTable() {
  const [selectedRows, setSelectedRows] = useState([
    "Protein Bar 100g",
    "Choco Bar 100g",
  ]);
  const keys = [
    "sales",
    "outOfStock",
    "inventory",
    "avgRank",
    "traffic",
    "impressions",
    "cli",
  ];

  const toggleSelect = (sku) => {
    setSelectedRows((prev) =>
      prev.includes(sku) ? prev.filter((s) => s !== sku) : [...prev, sku]
    );
  };

  const renderCellContent = (value, isExpandable) => {
    if (!isExpandable) return value;

    const [primary, secondary, rawChange] = value;
    const isZero = rawChange === "0" || rawChange === "0%";
    const isNegative = rawChange.includes("↓");
    const icon = isNegative ? arrowDown : arrowUp;
    const change = rawChange.replace(/[↑↓]/, "").trim();
    const changeColor = isNegative ? "text-[#F31D1D]" : "text-[#1D874F]";

    return (
      <div className="py-3 flex flex-col gap-2.5">
        <p className="font-semibold">{primary}</p>
        <p className="font-normal">{secondary}</p>
        {isZero ? (
          <p>-</p>
        ) : (
          <p
            className={`font-medium flex items-center justify-center gap-1 ${changeColor}`}>
            <Image src={icon} alt="arrow" />
            {change}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="border border-[#F1F1F1] bg-white rounded-xl overflow-hidden shadow-[0px_1px_0px_rgba(0,0,0,0.12)]">
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto relative ">
          <Table className="border-collapse w-full">
            <TableHeader className="sticky top-0 z-10 text-sm text-[#013025]">
              <TableRow>
                <TableHead
                  rowSpan={2}
                  className="sticky top-0 z-20 px-3 border-r border-[#F1F1F1]">
                  <div className="flex items-center gap-2 font-semibold">
                    <ChartLine strokeWidth={1.5} color="#031B15" />
                    SKU Name
                  </div>
                </TableHead>
                <TableHead
                  colSpan={3}
                  className="text-center font-bold border-r border-[#F1F1F1]">
                  Availability
                </TableHead>
                <TableHead colSpan={4} className="text-center font-bold">
                  Visibility
                </TableHead>
              </TableRow>
              <TableRow className="text-xs font-semibold text-[#013025]">
                <TableHead className="hidden" />
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Sales <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Out of Stock <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead className={"border-r border-[#F1F1F1]"}>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Total Inventory <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Avg Rank <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Est. Traffic <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Est. Impressions <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 justify-center p-4">
                    Cli <Image src={caretDown} alt="caretDown" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tableData.map((row, i) => {
                const isExpandable = Array.isArray(row.sales);

                return (
                  <TableRow
                    key={i}
                    className={`text-sm text-[#4E5E5A] font-medium text-center ${
                      selectedRows.includes(row.sku) ? "bg-[#F7F7F7]" : ""
                    } `}>
                    <TableCell className="sticky left-0 z-10 p-4 whitespace-nowrap border-r border-[#F1F1F1] min-w-36">
                      <div className="flex items-center gap-2 text-[15px] font-semibold underline text-[#0A090B]">
                        <Checkbox
                          checked={selectedRows.includes(row.sku)}
                          onCheckedChange={() => toggleSelect(row.sku)}
                        />
                        {row.sku}
                      </div>
                    </TableCell>

                    {keys.map((key) => (
                      <TableCell key={key} className={`${key ==="inventory" && "border-r border-[#F1F1F1]"}`}>
                        {renderCellContent(row[key], isExpandable)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
