"use client";

import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";


const SearchManufacture = ({manufacturer, setManufacturer,}: SearchManufacturerProps) => {
}
  const [query, setQuery] = useState("");
  
  const filteredManufacturers = manufacturers.filter((manufacturer)=>{
     
  })
    


  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              className="ml-4"
              width={18}
              height={18}
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)} // Update the search query when the input changes
            placeholder="Volkswagen..."
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options></Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
