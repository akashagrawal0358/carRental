import { MouseEventHandler } from 'react';


// Defining all props data types

export interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;

  // allows you to pass a function
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;

  // setState returns void 
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  // From rapid api cars properties
  year: number;
  combination_mpg: number;
  transmission: string;
  drive: string;
  class: string;
  cylinders: number;
  city_mpg: number;
  displacement: number;
  highway_mpg: number;
  model: string;
  make: string;
  fuel_type: string;
}