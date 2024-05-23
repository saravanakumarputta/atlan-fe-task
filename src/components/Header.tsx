import { cn } from "@/lib/utils";
import AtlanLogo from "../assets/atlan-blue.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Header: React.FC<{ className: string }> = ({ className }) => {
  return (
    <nav
      id="header"
      className={cn(
        "flex items-center justify-between py-4 border-b",
        className
      )}
    >
      <img src={AtlanLogo} alt="atlan-logo" className="w-[6rem]" />
      <a href="#" className="flex items-center" target="__blank">
        <GitHubLogoIcon className="mr-1" />
        <a
          href="https://github.com/saravanakumarputta/atlan-fe-task"
          target="_blank"
          className="text-foreground"
        >
          View on github
        </a>
      </a>
    </nav>
  );
};
