import { useState, useCallback, Suspense } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import "./styles.css";
import Tab from "./Tab";

import React from "react";

const Editor = React.lazy(
  () => import("../../pages/SQLQueryPage/components/Editor")
);

interface Tab {
  id: number;
  title: string;
}

const TabContainer = () => {
  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, title: "Tab 1" }]);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = useCallback((id: number) => {
    setActiveTab(id);
  }, []);

  const handleTabClose = useCallback(
    (id: number) => {
      if (tabs.length !== 1) {
        setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
        if (activeTab === id && tabs.length > 1) {
          setActiveTab(tabs[0].id);
        }
      }
    },
    [activeTab, tabs]
  );

  const addTab = () => {
    const newTabId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    setTabs([...tabs, { id: newTabId, title: `Tab ${newTabId}` }]);
    setActiveTab(newTabId);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center border-b">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={tab.id === activeTab}
            onClick={handleTabClick}
            onClose={handleTabClose}
          />
        ))}
        <div onClick={addTab} className="cursor-pointer ml-2">
          <PlusIcon />
        </div>
      </div>
      <div className="tab-content flex-grow">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`h-full tab-pane ${
              tab.id === activeTab ? "active" : ""
            }`}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Editor id={tab.id} isActiveEditor={tab.id === activeTab} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer;
