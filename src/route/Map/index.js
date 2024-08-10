import { Image, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";

const imageList = {
  Geography: [
    {
      image: require("../../assets/images/map/passes_in_india.png"),
      name: "passes.png",
      title: "Passes",
    },
    {
      image: require("../../assets/images/map/soils_in_india.jpg"),
      name: "passes.png",
      title: "Soil",
    },
    {
      image: require("../../assets/images/map/rock_system_in_india.png"),
      name: "passes.png",
      title: "Rock System",
    },
    {
      image: require("../../assets/images/map/forest_in_india.png"),
      name: "passes.png",
      title: "Forest",
    },
  ],
  "Ancient History": [],
  "Modern History": [],
};

const tabList = ["Geography", "Ancient History", "Modern History"];

const Map = () => {
  const [selectedTab, setSelectedTab] = React.useState("Geography");
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
            <div
              style={{
                display: "flex",
              }}
            >
              {imageList[selectedTab].map((i) => (
                <div
                  classname="loginimgdiv"
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    borderRadius:4,
                    margin:5,
                  }}
                >
                  <div style={{ width: "100%", fontWeight: "bold" ,fontSize:20,backgroundColor:"darkOrange"}}>
                    {i.title}
                  </div>
                  <Image src={i.image} alt="sample" height={300} width={300}  style={{ 
                    borderRadius:5
                  }}/>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Map;
