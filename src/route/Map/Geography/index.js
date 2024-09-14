import { UploadOutlined } from "@ant-design/icons";
import { Button, Image, Input, message, Upload } from "antd";
import React from "react";
import { getImageFromBackend, instance } from "../../../util/axios";

// const imageList = [
//   {
//     image: require("../../../assets/images/map/passes_in_india.png"),
//     name: "passes.png",
//     title: "Passes",
//   },
//   {
//     image: require("../../../assets/images/map/soils_in_india.jpg"),
//     name: "passes.png",
//     title: "Soil",
//   },
//   {
//     image: require("../../../assets/images/map/rock_system_in_india.png"),
//     name: "passes.png",
//     title: "Rock System",
//   },
//   {
//     image: require("../../../assets/images/map/forest_in_india.png"),
//     name: "passes.png",
//     title: "Forest",
//   },
// ];

export const getUUID = () => {
  const hashTable = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let uuid = [];
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid[i] = "-";
    } else {
      uuid[i] = hashTable[Math.ceil(Math.random() * hashTable.length - 1)];
    }
  }
  return uuid.join("");
};

const Geography = () => {
  const [fileList, setFileList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState("");
  const [titleName, setTitleName] = React.useState("");

  const [imageList, setImageList] = React.useState([]);

  const getGeographyJson = async () => {
    try {
      const result = await instance.get("/getgeoGraphyJsonFromBackend");

      console.log("resultresult", result.data);
      setImageList(
        result.data.map((i) => ({
          imageApi: i.fileName,
          // name: "passes.png",
          title: i.titleName,
        }))
      );
    } catch (error) {
      console.error("An error occurred:", error);
      // throw error;
    }
  };

  React.useEffect(() => {
    getGeographyJson();
  }, []);

  const uploadFile = (file) => {
    console.log("filefilefile", file);
    const fileName =
      titleName.replace(/[^a-zA-Z0-9]/g, "_") +
      getUUID() +
      "." +
      file.name.split(".").pop();

    const image1 = new File([file], fileName, {
      type: file.type,
    });

    const value = { fileName: fileName, titleName: titleName };
    var formData = new FormData();
    formData.append("metaData", JSON.stringify(value));
    formData.append("file", image1);

    console.log("formDataformData", formData);

    instance
      .post("/uploadGeographyImagesToBackend", formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      })
      .then(() => {
        message.success({
          content: "Image uploaded succesfully!!",
          key: "TELECOM_NMS_UI",
        });
        getGeographyJson();
      })
      .catch((e) => e);
  };

  const props = {
    beforeUpload(file) {
      // console.log('FILE', file);
      let fileExtension = file?.name.split(".").pop();
      if (
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        // uploadImage(file);
        setImageURL(URL.createObjectURL(file));
        setFileList([file]);
        // uploadFile(file);
      } else {
        message.error({
          content: "Only image will be accepted",
          key: "TELECOM_NMS_UI",
        });
        setFileList([]);
      }
      return false;
    },
    onRemove: () => {
      setFileList([]);
    },
    fileList: fileList,
    maxCount: 1,
    accept: ".jpg,.jpeg,.png",
  };

  return (
    <div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <Input
          onChange={(e) => setTitleName(e.target.value)}
          style={{ width: "150px" }}
        />
        <Upload {...props}>
          <Button
            size="small"
            icon={<UploadOutlined />}
            disabled={!titleName?.length}
          >
            Select
          </Button>
        </Upload>
        {fileList?.length ? (
          <>
            <Image src={imageURL} width={50} height={50}></Image>
            <Button
              onClick={() => {
                uploadFile(fileList[0]);
              }}
            >
              Upload
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {imageList.map((i) => (
          <div
            classname="loginimgdiv"
            style={{
              border: "1px solid black",
              textAlign: "center",
              borderRadius: 4,
              margin: 5,
              // flex: "1 1",
            }}
          >
            <div
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: 20,
                backgroundColor: "darkOrange",
              }}
            >
              {i.title}
            </div>
            <Image
              src={getImageFromBackend(i.imageApi)}
              alt="sample"
              height={300}
              width={300}
              style={{
                borderRadius: 5,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Geography;
