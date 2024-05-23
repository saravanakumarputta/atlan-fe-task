import { SideBar } from "./components/SideBar";
import TabContainer from "@/components/Tabs/Tabs";

export const SQLQueryPage = () => {
  return (
    <div className="flex Pagecontainer">
      <SideBar />
      <div className="flex-grow p-4">
        <TabContainer />
      </div>
    </div>
  );
};
