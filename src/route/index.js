import React from "react";
import EditPdf from "./EditPdf";
import Home from "./Home";
import ImportantPoints from "./ImportantPoints";
import Map from "./Map";
import APFC_PYQ from "./APFC_PYQ";
import APFC_NOTES from "./APFC_NOTES";
import APFC_ENGLISH from "./APFC_ENGLISH/intex";
import RootFlashcards from "./RootWords";
import CSE_PYQ from "./CSE_PYQ/TestSeries";

const navStyle = {
  padding: 5,
  fontSize: 20,
  cursor: "pointer",
  margin: 2,
  // backgroundColor: "darkOrange",
  borderRadius: 5,
};
const Index = () => {
  const [selectedMenu, setSelectedMenu] = React.useState("APFC_NOTES");

  const getItem = () => {
    switch (selectedMenu) {
      case "APFC_NOTES":
        return <APFC_NOTES />;
      case "APFC_PYQ":
        return <APFC_PYQ />;
      case "HOME":
        return <Home />;
      case "MAP":
        return <Map />;
      case "IMPORTANT_POINTS":
        return <ImportantPoints />;
      case "APFC_ENGLISH":
        return <APFC_ENGLISH />;
      case "EDIT_PDF":
        return <EditPdf />;
      case "ROOT_WORDS":
        return <RootFlashcards />;
      // case "CSE_PYQ":
      //   return <CSE_PYQ />;
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
              selectedMenu === "APFC_NOTES" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("APFC_NOTES")}
        >
          APFC NOTES
        </div>
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "APFC_PYQ" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("APFC_PYQ")}
        >
          APFC PYQ
        </div>
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
              selectedMenu === "APFC_ENGLISH" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("APFC_ENGLISH")}
        >
          APFC English
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
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "ROOT_WORDS" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("ROOT_WORDS")}
        >
          Root Words
        </div>
        <div
          style={{
            ...navStyle,
            backgroundColor:
              selectedMenu === "CSE_PYQ" ? "lightSkyBlue" : "darkOrange",
          }}
          onClick={() => setSelectedMenu("CSE_PYQ")}
        >
          CSE PYQ
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
