import React from "react";
import PDF from "../assets/test.pdf";
import EditPdf from "./EditPdf";
import Home from "./Home";
import ImportantPoints from "./ImportantPoints";
import Map from "./Map";
import { Button } from "antd";
import { instance } from "../util/axios";

const navStyle = {
  padding: 5,
  fontSize: 20,
  cursor: "pointer",
  margin: 2,
  // backgroundColor: "darkOrange",
  borderRadius: 5,
};
const Index = () => {
  const [selectedMenu, setSelectedMenu] = React.useState("HOME");

  const getItem = () => {
    switch (selectedMenu) {
      case "HOME":
        return <Home />;
      case "MAP":
        return <Map />;
      case "IMPORTANT_POINTS":
        return <ImportantPoints />;
      case "EDIT_PDF":
        return <EditPdf />;
      default:
    }
  };

  // const shutDownNow = async () => {
  //   try {
  //     await instance.get("/shutDown");
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //     // throw error;
  //   }
  // };

  return (
    <div>
      {/* <div style={{ height: "100px", textAlign: "center", fontSize: 60 }}>
        CRL PROJECTS
      </div> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "HOME" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("HOME")}
        >
          Home
        </div>
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "MAP" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("MAP")}
        >
          Map
        </div>
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "IMPORTANT_POINTS"
                ? "lightSkyBlue"
                : "darkOrange",
          }}
          onClick={() => setSelectedMenu("IMPORTANT_POINTS")}
        >
          Important Points
        </div>
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "EDIT_PDF" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("EDIT_PDF")}
        >
          Edit Pdf
        </div>
      </div>
      {getItem()}

      {/* <embed
        src={PDF + "#toolbar=0"}
        type="application/pdf"
        height={800}
        width={"100%"}
      /> */}
      {/* <Button onClick={shutDownNow}>Shut Down</Button> */}
    </div>
  );
};

export default Index;
