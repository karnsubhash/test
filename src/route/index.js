import React from "react";
import PDF from "../assets/test.pdf";
import EditPdf from "./EditPdf";
import Home from "./Home";
import ImportantPoints from "./ImportantPoints";
import Map from "./Map";

const navStyle = { padding: "10px", fontSize: 20, cursor: "pointer" };
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

  return (
    <div>
      <div style={{ height: "100px", textAlign: "center", fontSize: 60 }}>
        CRL PROJECTS
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "darkOrange",
        }}
      >
        <div style={{ ...navStyle }} onClick={() => setSelectedMenu("HOME")}>
          Home
        </div>
        <div style={{ ...navStyle }} onClick={() => setSelectedMenu("MAP")}>
          Map
        </div>
        <div
          style={{ ...navStyle }}
          onClick={() => setSelectedMenu("IMPORTANT_POINTS")}
        >
          Important Points
        </div>
        <div
          style={{ ...navStyle }}
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
    </div>
  );
};

export default Index;
