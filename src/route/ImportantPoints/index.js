import React from "react";
import { instance } from "../../util/axios";
import Tooltip from "./Tooltip";

const ImportantPoints = () => {
  const [dataList, setDataList] = React.useState([]);
  const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [hoveredData, setHoveredData] = React.useState(null);

  const getGeographyJson = async () => {
    try {
      const result = await instance.get("/getImportantPointsjson");

      console.log("resultresult", result.data);
      setDataList(result.data);
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  React.useEffect(() => {
    getGeographyJson();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {dataList.map((i) => (
        <div
          style={{
            minWidth: 400,
            flex: "1 1",
            textAlign: "center",
            padding: "5px 0",
            backgroundColor: "lightgreen",
            margin: "1px",
            cursor: "pointer",
            color: "black",
            fontWeight: "bold",
          }}
          onMouseEnter={(e) => {
            setTooltipPosition({
              x: e.clientX + 20,
              y: e.clientY + 20,
            });
            setTooltipVisible(true);
            setHoveredData(i);
            e.target.style.backgroundColor = "seaGreen";
            e.target.style.color = "beige";
          }}
          onMouseMove={(e) => {
            setTooltipPosition({
              x: e.clientX + 20,
              y: e.clientY + 20,
            });
            setTooltipVisible(true);
          }}
          onMouseLeave={(e) => {
            setTooltipVisible(false);
            setTooltipPosition({ x: 0, y: 0 });
            e.target.style.backgroundColor = "lightGreen";
            e.target.style.color = "black";
          }}
        >
          {i.title}
        </div>
      ))}
      <Tooltip
        tooltipVisible={tooltipVisible}
        tooltipPosition={tooltipPosition}
        hoveredData={hoveredData}
      />
    </div>
  );
};

export default ImportantPoints;
