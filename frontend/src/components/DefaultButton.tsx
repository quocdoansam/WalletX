import React from "react";

interface DefaultButtonProps {
  children?: React.ReactNode;
  text?: string
  onClick?: () => void;
  className?: string;
  prefix?: React.ReactNode
}

const DefaultButton = ({ text = "Default Button", className, onClick, prefix }: DefaultButtonProps) => {
  return (
    <button className={"default-button " + className} onClick={onClick}>{prefix}{text}</button>
  )
}

export default DefaultButton