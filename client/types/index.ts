import {MouseEventHandler} from 'react' ;


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