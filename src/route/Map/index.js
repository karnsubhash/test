import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";
import AncientHistory from "./AncientHistory";
import EconomicsIR from "./Economics_IR";
import Geography from "./Geography";
import MedievalHistory from "./MedievalHistory";

const tabList = [
  "Geography",
  "Ancient History",
  "Medieval History",
  "Economics - IR",
];

const Map = () => {
  const [selectedTab, setSelectedTab] = React.useState("Geography");

  const getSelectedTabComponent = (tab) => {
    switch (tab) {
      case "Geography":
        return <Geography />;
      case "Ancient History":
        return <AncientHistory />;
      case "Medieval History":
        return <MedievalHistory />;
        case "Economics - IR":
        return <EconomicsIR />;
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
