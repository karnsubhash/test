import { UploadOutlined } from "@ant-design/icons";
import { Button, Image, Input, message, Upload } from "antd";
import React from "react";
import { getImageFromBackend, instance } from "../../../util/axios";
import { getUUID } from "../../../util/common";

const Environment = () => {
  const [fileList, setFileList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState("");
  const [titleName, setTitleName] = React.useState("");

  const [imageList, setImageList] = React.useState([]);
  const [displayDataList, setDisplayDataList] = React.useState([]);
  const searchInputEnvironmentRef = React.useRef(null);

  const getEnvironmentJson = async () => {
    try {
      const result = await instance.get("/getEnvironmentJsonFromBackend");

      console.log("resultresult", result.data);
      setImageList(
        result.data.map((i) => ({
          ...i,
          imageApi: i.fileName,
          // name: "passes.png",
          title: i.titleName,
        }))
      );
      setDisplayDataList(
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
    getEnvironmentJson();
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
      .post("/uploadEnvironmentImagesToBackend", formData, {
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
        getEnvironmentJson();
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

  const findData = (input, data) => {
    let finalDataList = [];
    for (let i in data) {
      if (data[i].fileName.toLowerCase().includes(input.toLowerCase())) {
        // console.log("Found match", data[i]);
        finalDataList.push(data[i]);
      } else {
        if (data[i].linkedTopics?.length) {
          data[i].linkedTopics.forEach((element) => {
            if (element.toLowerCase().includes(input.toLowerCase())) {
              finalDataList.push(data[i]);
            }
          });
        } else if (data[i].titleName?.length) {
          if (data[i].fileName.toLowerCase().includes(input.toLowerCase())) {
            finalDataList.push(data[i]);
          }
        }
      }
    }

    console.log("input, data", input, data, finalDataList);
    return finalDataList;
  };

  const onSearch = () => {
    if (searchInputEnvironmentRef.current?.value) {
      const finalDataList = findData(
        searchInputEnvironmentRef.current.value,
        imageList
      );
      setDisplayDataList(finalDataList);
    } else {
      setDisplayDataList(imageList);
    }
  };

  return (
    <div>
      {process.env.NODE_ENV !== "production" ? (
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
      ) : (
        <></>
      )}
      <input
        ref={searchInputEnvironmentRef}
        type="text"
        style={{ width: "100%" }}
        placeholder="Type and enter to search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {displayDataList.map((i) => (
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
                fontSize: 16,
                backgroundColor: "darkOrange",
              }}
            >
              {i.title}
            </div>
            <Image
              src={getImageFromBackend("EnvironmentImages", i.imageApi)}
              alt="sample"
              height={180}
              width={200}
              style={{
                borderRadius: 5,
              }}
              //event.preventDefault()
              onLoad={() => {
                console.log("IMAGE LOADED");
              }}
              onError={() => {
                console.log("IMAGE LOADED ERROR");
              }}
              onAbort={() => {
                console.log("IMAGE LOADED ERROR");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Environment;
