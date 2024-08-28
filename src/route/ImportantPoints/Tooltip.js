import React from "react";
const Tooltip = ({ tooltipVisible, tooltipPosition, hoveredData }) => {
  return (
    <div
      style={{
        display: tooltipVisible ? undefined : "none",
        opacity: tooltipVisible ? 1 : 0,
        position: "absolute",
        left: tooltipPosition.x,
        top: tooltipPosition.y,
        zIndex: 999,
        border: "1px solid darkBlue",
        borderRadius: 5,
        color: "black",
        padding: 2,
        background: "beige",
        minWidth: 250,
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "darkorange",
          borderRadius: 3,
          padding: 5,
          marginBottom: 3,
        }}
      >
        {hoveredData?.title}
      </div>

      {!!hoveredData &&
        hoveredData.linkedTopics.map((i, index) => (
          <div
            style={{
              borderBottom:
                index !== hoveredData.linkedTopics.length - 1
                  ? "1px solid darkBlue"
                  : undefined,
            }}
          >
            {i}
          </div>
        ))}
    </div>
  );
};

export default Tooltip;
