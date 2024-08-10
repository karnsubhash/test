import { UploadOutlined } from "@ant-design/icons";
import { Button, Image, message, Upload } from "antd";
import React from "react";
import { instance } from "../../../util/axios";

const imageList = [
  {
    image: require("../../../assets/images/map/passes_in_india.png"),
    name: "passes.png",
    title: "Passes",
  },
  {
    image: require("../../../assets/images/map/soils_in_india.jpg"),
    name: "passes.png",
    title: "Soil",
  },
  {
    image: require("../../../assets/images/map/rock_system_in_india.png"),
    name: "passes.png",
    title: "Rock System",
  },
  {
    image: require("../../../assets/images/map/forest_in_india.png"),
    name: "passes.png",
    title: "Forest",
  },
];

const Geography = () => {
  const [fileList, setFileList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState("");

  const uploadPdf = (file) => {
    var formData = new FormData();
    formData.append("file", file);
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
      })
      .catch((e) => e);
  };

  const props = {
    beforeUpload(file) {
      // console.log('FILE', file);
      let fileExtension = file?.name.split(".").pop();
      if (fileExtension === "pdf") {
        // uploadImage(file);
        setImageURL(URL.createObjectURL(file));
        setFileList([file]);
        uploadPdf(file);
      } else {
        message.error({
          content: "Only svg will be accepted",
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
    accept: ".pdf",
  };

  return (
    <div>
      <div style={{ width: "100%", display: "flex" }}>
        <Upload {...props}>
          <Button size="small" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </div>
      <div
        style={{
          display: "flex",
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
              src={i.image}
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
