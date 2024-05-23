import { ReactNode } from "react";

type SidePanelHeaderProps = {
  title: string;
  icon: ReactNode;
};

export const SidePanelHeader: React.FC<SidePanelHeaderProps> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex items-center">
      {icon}
      <div className="text-md font-semibold ml-2">{title}</div>
    </div>
  );
};
