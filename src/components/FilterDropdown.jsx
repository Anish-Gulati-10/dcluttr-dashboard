'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const allFilters = [
  { id: "category", label: "Category" },
  { id: "sku", label: "SKU" },
  { id: "region", label: "Region" },
  { id: "status", label: "Status" },
]

export default function FilterDropdown() {
  const [selectedFilters, setSelectedFilters] = useState(["sku"])

  const toggleFilter = (id) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="rounded-[10px] bg-[#027056] hover:bg-[#01493E] text-white font-medium px-3 py-2.5 h-auto text-sm flex items-center gap-2 border border-[#D9D9D9] focus-visible:ring-0 focus-visible:outline-none"
        >
          Filters({selectedFilters.length})
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {allFilters.map((filter) => (
          <DropdownMenuCheckboxItem
            key={filter.id}
            checked={selectedFilters.includes(filter.id)}
            onCheckedChange={() => toggleFilter(filter.id)}
          >
            {filter.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
