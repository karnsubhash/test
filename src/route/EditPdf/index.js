import { Button, message, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { instance } from "../../util/axios";

const EditPdf = () => {
  const [fileList, setFileList] = React.useState([]);
  const [imageURL, setImageURL] = React.useState("");
  const uploadPdf = (file) => {
    // var formData = new FormData();
    // formData.append("file", file);
    // instance
    //   .post("/uploadGeographyImagesToBackend", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data;",
    //     },
    //     maxContentLength: Infinity,
    //     maxBodyLength: Infinity,
    //   })
    //   .then(() => {
    //     message.success({
    //       content: "Image uploaded succesfully!!",
    //       key: "TELECOM_NMS_UI",
    //     });
    //   })
    //   .catch((e) => e);
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
          content: "Only pdf will be accepted",
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

  // React.useEffect(() => {
  //   try {
  //     const result = instance.get("/getThemeSettingFromBackend");

  //     console.log("resultresult", result);
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //     throw error;
  //   }
  // }, []);

  return (
    <div>
      <Upload {...props}>
        <Button size="small" icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>

      {!!imageURL && (
        <embed
          src={imageURL + "#toolbar=0"}
          type="application/pdf"
          height={window.screen.availHeight - 220}
          width={"100%"}
        />
      )}
    </div>
  );
};

export default EditPdf;
