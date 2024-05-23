import { CrossCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface TabProps {
  id: number;
  title: string;
  isActive: boolean;
  onClick: (id: number) => void;
  onClose: (id: number) => void;
}

const Tab: React.FC<TabProps> = React.memo(
  ({ id, title, isActive, onClick, onClose }) => {
    return (
      <div
        className={`tab flex items-center mx-[2px] p-2 last:mr-2 cursor-pointer rounded-tr-md rounded-tl-md  ${
          isActive ? "active" : ""
        }`}
        onClick={() => onClick(id)}
      >
        <span>{title}</span>
        <div
          className="ml-2"
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
        >
          <CrossCircledIcon />
        </div>
      </div>
    );
  }
);

export default Tab;
