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
          fontWeight: "bold",
        }}
      >
        {hoveredData?.title}
      </div>

      {/* {!!hoveredData &&
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
              ))} */}
      {!!hoveredData &&
        hoveredData.dataList.map((i, index) => (
          <div
            style={{
              borderBottom:
                index !== hoveredData.dataList.length - 1
                  ? "1px solid darkBlue"
                  : undefined,
              backgroundColor: index % 2 === 0 ? "lavender" : "lavender",
              padding: "10px 5px",
              maxWidth: 500,
            }}
          >
            <span style={{ fontWeight: "bold" }}>{i.title}</span>&nbsp;-&nbsp;
            {i.description
              .split("[BOLD]")
              .map((d, index) =>
                index % 2 === 0 ? (
                  d
                ) : (
                  <span style={{ fontWeight: "bold" }}>{d}</span>
                )
              )}
          </div>
        ))}

      <div style={{ fontSize: "12px" }}>
        {!!hoveredData?.linkedTopics?.length ? (
          <>
            <span style={{ fontWeight: "bold" }}>Linked Topics</span>
            &nbsp;-&nbsp;{hoveredData.linkedTopics.join(", ")}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tooltip;
