import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";
import Geography from "./Geography";

const tabList = ["Geography", "Ancient History", "Modern History"];

const Map = () => {
  const [selectedTab, setSelectedTab] = React.useState("Geography");

  const getSelectedTabComponent = (tab) => {
    switch (tab) {
      case "Geography":
        return <Geography />;
      default:
        <div>Under Development</div>;
    }
  };
  return (
    <div>
      <Tabs
        activeKey={selectedTab}
        onChange={(v) => {
          console.log("vvv", v);
          setSelectedTab(v);
        }}
      >
        {tabList.map((i) => (
          <TabPane tab={i} key={i}>
            {getSelectedTabComponent(selectedTab)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Map;
