import React, { useEffect, useState } from "react";

export interface SwitchProps {
  initialValue: string;
  setValue: (s: string) => void;
  options: string[];
}

export const SportTypeSwitch = ({
  initialValue,
  setValue,
  options,
}: SwitchProps): JSX.Element => {
  const [firstOptionIsSelected, setFirstOptionIsSelected] =
    useState<boolean>(true);

  const handleClick = (firstIsSelected: boolean) => {
    setFirstOptionIsSelected(firstIsSelected);
    if (firstOptionIsSelected) {
      setValue(options[0]);
    } else {
      setValue(options[1]);
    }
  };
  return (
    <div>
      <div className="flex p-4 bg-gray-600 rounded-xl text-white opacity-80 shadow-2xl">
        <button
          style={{ fontWeight: firstOptionIsSelected ? "bold" : "normal" }}
          onClick={() => handleClick(true)}
        >
          {options[0]}
        </button>
        <button
          style={{ fontWeight: firstOptionIsSelected ? "normal" : "bold" }}
          onClick={() => handleClick(false)}
          className="ml-24"
        >
          {options[1]}
        </button>
      </div>
    </div>
  );
};
