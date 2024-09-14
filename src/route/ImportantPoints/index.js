import React from "react";
import { instance } from "../../util/axios";
import Tooltip from "./Tooltip";

const ImportantPoints = () => {
  const [dataList, setDataList] = React.useState([]);
  const [displayDataList, setDisplayDataList] = React.useState([]);
  const [tooltipPosition, setTooltipPosition] = React.useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [hoveredData, setHoveredData] = React.useState(null);

  const getGeographyJson = async () => {
    try {
      const result = await instance.get("/getImportantPointsjson");

      // console.log("resultresult", result.data);
      setDataList(result.data);
      setDisplayDataList(result.data);
    } catch (error) {
      // console.error("An error occurred:", error);
      // throw error;
    }
  };

  React.useEffect(() => {
    getGeographyJson();
  }, []);

  const findData = (input, data) => {
    let finalDataList = [];
    for (let i in data) {
      if (data[i].title.toLowerCase().includes(input.toLowerCase())) {
        // console.log("Found match", data[i]);
        finalDataList.push(data[i]);
      } else {
        if (data[i].linkedTopics?.length) {
          data[i].linkedTopics.forEach((element) => {
            if (element.toLowerCase().includes(input.toLowerCase())) {
              finalDataList.push(data[i]);
            }
          });
        } else if (data[i].dataList?.length) {
          data[i].dataList.forEach((element) => {
            if (element.title.toLowerCase().includes(input.toLowerCase())) {
              finalDataList.push(data[i]);
            } else if (
              element.description.toLowerCase().includes(input.toLowerCase())
            ) {
              finalDataList.push(data[i]);
            }
          });
        }
      }
    }
    return finalDataList;
  };

  const onSearch = (searchInputValue) => {
    // console.log("searchInputValue", searchInputValue);
    if (searchInputValue) {
      const finalDataList = findData(searchInputValue, dataList);
      // console.log("finalDataList", finalDataList);
      setDisplayDataList(finalDataList);
    } else {
      setDisplayDataList(dataList);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        id="searchInput"
        style={{ width: "100%" }}
        placeholder="Type and enter to search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(document.getElementById("searchInput").value);
          }
        }}
      />

      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {displayDataList.map((i) => (
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
    </div>
  );
};

export default ImportantPoints;
